import { parse } from "csv-parse";
import { createReadStream } from "fs";
import { FilterFieldByValue } from "./filterFieldByValue.js";
import { createGunzip } from "zlib";

const csvParser = parse({ columns: true });

// Crime per area
// Most common crime in Croydon
// const crimes = {};
// createReadStream("london_crime_by_lsoa.csv.gz")
//   .pipe(new createGunzip())
//   .pipe(csvParser)
//   .pipe(new FilterFieldByValue("lsoa_code", "E01001116")) // TODO: Write this class.
//   .on("data", (rowString) => {
//     const row = JSON.parse(rowString);
//     crimes[row.major_category] = crimes[row.major_category]
//       ? crimes[row.major_category] + 1
//       : 1;
//     console.log(crimes);
//   })
//   .on("finish", () => {
//     const max = Math.max(...Object.values(crimes));
//     const maxCrime = Object.keys(crimes).find((key) => crimes[key] === max);
//     console.log(`The most frequent crime in Croydon is ${maxCrime}.`);
//   });

// Fraud or Forgery
// This should be largely the same as the above but with a different
// field/value pair.
const locations = {};

createReadStream("london_crime_by_lsoa.csv.gz")
  .pipe(new createGunzip())
  .pipe(csvParser)
  .pipe(new FilterFieldByValue("major_category", "Fraud or Forgery")) // TODO: Write this class.
  .on("data", (rowString) => {
    const row = JSON.parse(rowString);
    locations[row.borough] = locations[row.borough]
      ? locations[row.borough] + 1
      : 1;
    console.log(locations);
  })
  .on("finish", () => {
    const max = Math.max(...Object.values(locations));
    const maxCrime = Object.keys(locations).find(
      (key) => locations[key] === max
    );
    console.log(`The most frequent crime in Croydon is ${maxCrime}.`);
  });
