const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const Url = require("./database/models/urlModel");
const Vote = require("./database/models/voteModel");
const dbConnection = require("./database/connection");
const { formatMongoData } = require("./utilities/formatMongoData");
const constants = require("./constants/index");
const defaultServerResponse = constants.defaultServerResponse;
const voteResponse = constants.voteResponse;

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.get("/", (req, res) => {
  res.json({ data: "server is working" });
});

app.post("/", async (req, res) => {
  let response = defaultServerResponse;

  try {
    //get form data from body
    const {
      fullName,
      phone,
      faculty,
      level,
      bestIndividualPerformance,
      bestFaculty,
      voteUrl,
    } = req.body;

    // check if url has been used before
    //check if url exist in db, then check status
    const existingUrl = await Url.findOne({ url: voteUrl });

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
      bestFaculty: bestFaculty,
      bestinduvidualPerformance: bestIndividualPerformance,
      voteUrl: voteUrl,
    });

    await newVote.save();

    response.status = 200;
    response.message = voteResponse.successfull;
    response.data = await formatMongoData(newVote);
  } catch (error) {
    console.log("error occured while attpemting voting");
    response.message = voteResponse.unSuccessfull;
    response.data = await formatMongoData(newVote);
    response.Error = "error occured while attpemting voting";
  } finally {
    res.status(response.status).send(response);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
