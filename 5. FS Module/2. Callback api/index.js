import * as fs from "fs";

fs.mkdir("D:\\xuxn\\node", function (error) {
  if (error) throw error;
  console.log("File created");
});
