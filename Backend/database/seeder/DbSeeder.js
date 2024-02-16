const dotEnv = require("dotenv");
dotEnv.config();
// const VoteUrl = require("../models/urlModel")
const UrlSeeder = require("./urlSeeder");
const dbConnection = require("../connection");
// const fs = require("fs")

dbConnection();

(async function () {
  await UrlSeeder.UrlSeeder(500);
  console.log("url seeder complete")
})();
