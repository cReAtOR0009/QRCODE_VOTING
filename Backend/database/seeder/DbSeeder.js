const dotEnv = require("dotenv");
dotEnv.config();
// const VoteUrl = require("../models/urlModel")
const UrlSeeder = require("./urlSeeder");
const voteSeeder = require("./voteSeeder")
const dbConnection = require("../connection");
// const fs = require("fs")

dbConnection();

(async function () {
  // await UrlSeeder.UrlSeeder(5000);
  await voteSeeder.voteSeeder(20)
  console.log("url seeder complete")
})();
