import http from "http";

// Create our server
const server = http.createServer((req, res) => {
  res.writeHead(202, "good", { "Content-type": "text/html" });

  res.write("<h1>Hello From Node.js Server Hi</h1>");
});

// Listening on port 8080
server.listen(8000, () => {
  console.log("Server Up!");
});
