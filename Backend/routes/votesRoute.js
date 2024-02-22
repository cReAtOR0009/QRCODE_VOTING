const express = require("express");
require("dotenv").config();
const router = express.Router();
const Vote = require("../database/models/voteModel");
let defaultServerResponse = {
  status: 400,
  message: "",
  data: {},
};

const { authMiddleware } = require("../utilities/validateToken");
const { formatMongoData } = require("../utilities/formatMongoData");
const allFaculty = [
  "Faculty of Agriculture",
  "Faculty of Art",
  "Faculty of Education",
  "Faculty of Environmental Design and Management",
  "Faculty of Law",
  "Faculty of Science",
  "Faculty of The Social Sciences",
  "Faculty of Administration and Management Sciences",
];

//render dasboard can get votes for each faculty
//render dashboard can get votes for each induvidual performance
//render dashboard total casted votes
//render dashboard can get deta

router.get("/faculty", authMiddleware, async (req, res) => {
  let votes = [];
  let response = defaultServerResponse;

  try {
    for (let index = 0; index < allFaculty.length; index++) {
      let votObject = {};
      const facultyVotes = await Vote.find({
        bestFacultyPerformance: allFaculty[index],
      });
      let formattedResult = await formatMongoData(facultyVotes);
      // console.log("facultyVotes: ", formattedResult);
      votObject[allFaculty[index]] = formattedResult;
      votes.push(votObject);
    }
    let formattedData = votes;

    response.status = 200;
    response.message = "data fetched successfully";
    response.data = formattedData;
    response.error = null;
  } catch (error) {
    console.log(error);
    console.log("something went wrong while fetching data: ", error.message);
    response.status = response.status;
    response.message = "something went wrong while fetching data";
    response.data = {};
    response.error = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
});

router.get("/totalvotes", authMiddleware, async (req, res) => {
  let totalvotesArray = [];
  let response = defaultServerResponse;

  try {
    for (let index = 0; index < allFaculty.length; index++) {
      const currentFaculty = allFaculty[index];
      let facultyVotes = await Vote.find({
        bestFacultyPerformance: currentFaculty,
      });
      let TotalVotes = facultyVotes.length;
      totalvotesArray.push({ [currentFaculty]: TotalVotes });
    }
    response.status = 200;
    response.data = totalvotesArray;
    response.Error = null;
    response.message = "total votes fetched succesfully";
  } catch (error) {
    console.log(error);
    console.log("something went wrong while fetching totalvotes data: ", error.message);
    response.status = response.status;
    response.message = "something went wrong while fetching totalvotes data";
    response.data = {};
    response.error = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
});

// router.get("/bestinduvidualperformance", authMiddleware, async (req, res) => {
//   let votes = [];
//   let response = defaultServerResponse;
//   try {
//     for (let index = 0; index < induvidaulPerformance.length; index++) {
//       let performer = {};
//       const performance = induvidaulPerformance[index];
//       const performanceVotesArray = await Vote.find({
//         bestIndividualPerformance: performance,
//       });
//       const formattedVotes = await formatMongoData(performanceVotesArray);
//       performer[[performance]] = formattedVotes;
//       votes.push(performer);
//     }

//     response.status = 200;
//     response.data = votes;
//     response.message = "induvidual votes fetched successfully";
//     response.error = null;
//   } catch (error) {
//     console.log("error ocurred while fetching induvidual votes", error.message);
//     console.log(error);
//     response.status = defaultServerResponse.status;
//     response.data = {};
//     response.message = "error ocurred while fetching induvidual votes";
//     response.error = error.message;
//   } finally {
//     res.status(response.status).send(response);
//   }
// });

module.exports = router;
