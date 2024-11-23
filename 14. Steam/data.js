import fs from "fs";

for (let i = 0; i < 10000; i++) {
  fs.writeFileSync("./data.txt", `Line${i}\n`, { flag: "a" });
}
