const VoteUrl = require("../models/urlModel");
const { simpleFaker } = require("@faker-js/faker");
const fs = require("fs");
const { urls } = require("./urls");
// console.log(urls);

module.exports.UrlDbSeeder = async function seed() {
  let urlData = [];
  console.log("seeding  db with already generated urls");

  for (let index = 0; index < urls.length; index++) {
    const element = urls[index];
    // console.log(element)
    urlData.push(element);
  }

  try {
    // Insert fake data into database
    console.log("url files inserting to db.....................");
    result = await VoteUrl.insertMany(urlData);
    console.log("all files succesfully added to database done!");
  } catch (error) {
    console.log("error inserting to db", error);
  }
};

module.exports.UrlSeeder = async function seed(seed_count = 50) {
  let FakeData = [];
  // console.log(urls[0])

  // Generate fake data
  console.log("seeding db and generating urls");
  for (let i = 0; i < seed_count; i++) {
    const url = simpleFaker.string.uuid();
    const used = false;
    FakeData.push({ url, used });
    await this.addContentToArray("urlData.json", { url }); // Save URL to file
  }

  console.log("url files created suceesfully");
  try {
    // Insert fake data into database
    result = await VoteUrl.insertMany(FakeData);
    console.log("all files succesfully added to database");
  } catch (error) {
    console.log("error inserting to db", error);
  }
};

let dataArray = []; // Array to hold the data

// Function to add content to the array and file
module.exports.addContentToArray = async (filename, content) => {
  try {
    // Read the existing data from the file
    const data = await readFileAsync(filename || "urlData.json", "utf8");
    dataArray = JSON.parse(data);

    // Add the new content to the array
    dataArray.push(content);

    // Write the updated array back to the file
    await writeFileAsync(
      filename || "urlData.json",
      JSON.stringify(dataArray, null, 2),
      "utf8"
    );
    console.log("Content added successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
};

// Function to read file asynchronously
function readFileAsync(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

// Function to write file asynchronously
function writeFileAsync(filename, data, encoding) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, encoding, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

// Export the array so it can be used in other files
module.exports.getDataArray = () => {
  return dataArray;
};
