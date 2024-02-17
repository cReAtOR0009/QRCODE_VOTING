const dotEnv = require("dotenv");
dotEnv.config();
// const VoteUrl = require("../models/urlModel")
const {UrlSeeder} = require("./urlSeeder");
const {UrlDbSeeder} = require("./urlSeeder")
const voteSeeder = require("./voteSeeder")
const dbConnection = require("../connection");
// const fs = require("fs")

dbConnection();

(async function () {
  // await UrlSeeder.UrlSeeder(5000); 
  // await voteSeeder.voteSeeder(1000)
  // await UrlDbSeeder() 
  // console.log("db seeded with url complete...Done!")
  // console.log("db seeded with votes complete...Done!")
  // console.log("url seeder complete")
  // console.log("votes seeder complete")
})();
