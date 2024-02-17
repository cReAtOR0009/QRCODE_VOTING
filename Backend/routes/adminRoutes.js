const express = require("express");
require("dotenv").config();
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { authMiddleware } = require("../utilities/validateToken");
const { formatMongoData } = require("../utilities/formatMongoData");

const User = require("../database/models/userModel");

router.get("/login", async (req, res) => {
  res.render("adminlogin");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      throw new Error("User doesn't exist");
    }

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword) {
      throw new Error("Incorrect password");
    }

    const token = jwt.sign(
      { id: existingUser.id },
      process.env.SECRET_KEY || "secretKey",
      { expiresIn: "1h" }
    );

    // Set the token in a cookie for future requests
    res.cookie("token", token, { httpOnly: true });

    //Set token header
    res.set("Authorization", `Bearer ${token}`);

    // Render the adminDashboard EJS file upon successful login
    return res.render("adminDashboard", { user: existingUser });
  } catch (error) {
    console.error("Error logging in user:", error.message);

    // Send an error response to be handled by AJAX
    return res.status(400).json({ error: error.message });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // Hash the password

    const saltRounds = (await parseInt(process.env.HASH_SALT)) || 15;
    const salt = await bcrypt.genSaltSync(saltRounds);

    hashedPassword = await bcrypt.hashSync(password, salt || 15);

    // Create a new user
    const newUser = new User({ username, password: hashedPassword });
    const savedUser = await newUser.save();
    const formattedData = await formatMongoData(savedUser);

    // Return the created user object
    res.status(201).json(formattedData);
  } catch (error) {
    console.log("ERROR", error);
    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// router.get("/signup", async (req, res) => {
//   res.render("signupUser");
// });
router.get("/dashboard", authMiddleware, (req, res) => {
  return res.render("adminDashboard", { user: req.user });
});

router.get("/logout", (req, res) => {
  // Clear the token cookie
  res.clearCookie("token");

  // Redirect the user to the login page or any other desired page
  res.redirect("/admin/login");
});

module.exports = router;
