import { createReadStream } from "fs";

const stream = createReadStream("./data.txt", {
  encoding: "utf-8",
  highWaterMark: 1 * 1024,
});

stream.on("data", (chunk) => {
  console.log("Chunk Received:", chunk);
});
