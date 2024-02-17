const Vote = require("../models/voteModel");
const { faker } = require("@faker-js/faker");
const fs = require("fs");
const mongoose = require("mongoose");

const faculties = [
  "Faculty of Agriculture",
  "Faculty of Art",
  "Faculty of Education",
  "Faculty of Environmental Design and Management",
  "Faculty of Law",
  "Faculty of Science",
  "Faculty of The Social Sciences",
  "Faculty of Administration and Management Sciences",
];

const individualPerformances = [
  "contestant 1",
  "contestant 2",
  "contestant 3",
  "contestant 4",
  "contestant 5",
  "contestant 6",
  "contestant 7",
  "contestant 8",
  "contestant 9",
  "contestant 10",
  "contestant 11",
  "contestant 12",
  "contestant 13",
  "contestant 14",
  "contestant 15",
  "contestant 16",
  "contestant 17",
  "contestant 18",
  "contestant 19",
  "contestant 20",
];
const levels = [100, 200, 300, 400, 500];

module.exports.voteSeeder = async (seed_count = 50) => {
  try {
    for (let i = 0; i < seed_count; i++) {
      const fullName = faker.person.fullName();
      const phone = faker.phone.number();
      const faculty = faker.helpers.arrayElement(faculties);
      const level = faker.helpers.arrayElement(levels);
      const bestFacultyPerformance = faker.helpers.arrayElement(faculties);
      const bestIndividualPerformance = faker.helpers.arrayElement(
        individualPerformances
      );
      const url = new mongoose.Types.ObjectId(); // Generate a random ObjectId for URL

      const vote = new Vote({
        fullName,
        phone,
        faculty,
        level,
        bestFacultyPerformance,
        bestIndividualPerformance,
        url,
      });

      await vote.save();
    }
    console.log("Votes generated successfully.");
  } catch (error) {
    console.error("Error generating votes:", error);
  } finally {
  }
};
