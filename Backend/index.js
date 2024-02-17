const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");

const VotingURL = require("./database/models/urlModel");
const Vote = require("./database/models/voteModel");
const dbConnection = require("./database/connection");
const { formatMongoData } = require("./utilities/formatMongoData");

const adminRoutes = require("./routes/adminRoutes");
const voteRoutes = require("./routes/votesRoute")

const constants = require("./constants/index");
const defaultServerResponse = constants.defaultServerResponse;
const voteResponse = constants.voteResponse;

const app = express();
const path = require("path");
app.set("view engine", "ejs");

// Serve static assets
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dbConnection();

app.use("/admin", adminRoutes);
app.use("/votes", voteRoutes)

app.get("/", (req, res) => {
  res.json({ data: "server is working" });
});

app.post("/", async (req, res) => {
  let response = defaultServerResponse;
  console.log(req.body);
  try {
    //get form data from body
    const {
      fullName,
      phone,
      faculty,
      level,
      bestFacultyPerformance,
      bestinduvidualPerformance,
      voteUrl,
    } = req.body;

    // check if url has been used before
    //check if url exist in db, then check status
    let existingUrl = await VotingURL.findOne({ url: voteUrl });

    //check if url exist in db
    if (!existingUrl) {
      throw new Error(voteResponse.wrongQRCode);
    }

    //check if url has been used
    const urlStatus = existingUrl.used;
    if (urlStatus == true) {
      throw new Error(voteResponse.usedQRCode);
    }
    // create new vote in db
    const newVote = await new Vote({
      fullName: fullName,  
      phone: phone,
      faculty: faculty,
      level: level,
      bestFacultyPerformance: bestFacultyPerformance,
      bestinduvidualPerformance: bestinduvidualPerformance,
      url: existingUrl.id,
    });

    await newVote.save();

    await VotingURL.findByIdAndUpdate(
      { _id: existingUrl.id },
      { used: true, vote: newVote.id },
      {
        new: true,
      }
    );

    // existingUrl.used = true
    // await existingUrl.save()

    response.status = 200;
    response.message = voteResponse.successfull;
    response.data = await formatMongoData(newVote);
    response.Error = "";
  } catch (error) {
    console.log("error occured while attpemting voting", error);
    response.status = defaultServerResponse.status;
    response.message = voteResponse.unSuccessfull;
    response.data = {};
    response.Error = error.message;
  } finally {
    res.status(response.status).send(response);
    console.log(response);
  }
});

app.post("/addurl", async (req, res) => {
  let response = defaultServerResponse;

  try {
    const { url } = req.body;
    const newUrl = new VotingURL({ url: url });

    await newUrl.save();

    response.status = 200;
    response.message = constants.urlResponse.addSuccessful;
    response.data = await formatMongoData(newUrl);
  } catch (error) {
    console.log("error occured while adding url", error);
    response.message = constants.urlResponse.addUnsuccessful;
    response.Error = "error occured while adding Url";
  } finally {
    res.status(response.status).send(response);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
