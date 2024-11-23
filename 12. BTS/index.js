// without call back

import fs from "fs";

// console.log("Start");

// let data = fs.readFileSync("notes.txt", "utf-8");

// console.log(data);

// console.log("End");

// without call back

console.log("Start");

fs.readFile("notes.txt", "utf-8", (err, data) => {
  err ? console.log(err) : console.log(data);
});

console.log("End");
