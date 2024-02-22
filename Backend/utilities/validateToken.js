const jwt = require("jsonwebtoken");
const User = require("../database/models/userModel"); // Import your User model

module.exports.authMiddleware = async (req, res, next) => {
  try {
    // Check if the token exists in the request headers
    // const token = req.headers.authorization;
    const token = req.cookies.token;
    // console.log("token: ", token);

    if (!token) {
      throw new Error("Authorization token is missing");
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY || "secretKey");

    // Attach the authenticated user to the request object
    const user = await User.findById(decoded.id);
    if (!user) {
      throw new Error("User not found");
    }
    req.user = user;

    // Check if the token is about to expire (within 5 minutes)
    const expirationTime = decoded.exp * 1000; // Convert seconds to milliseconds
    const currentTime = Date.now();

    if (expirationTime - currentTime < 300000) {
      // 5 minutes
      // Renew the token
      const renewedToken = jwt.sign(
        { id: decoded.id },
        process.env.SECRET_KEY || "secretKey",
        { expiresIn: "1h" }
      );
      // Set the renewed token as a cookie in the response headers
      res.cookie("token", renewedToken, { httpOnly: true });
    }

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    return res.redirect("/admin/login");
    // return res
    //   .status(401)
    //   .json({ error: "Unauthorized", message: error.message });
  }
};
