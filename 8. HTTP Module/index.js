import http from "http";

// Create our server
const server = http.createServer((req, res) => {
    console.log(req);
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 202;
  //   res.statusMessage = "Good";

  res.writeHead(202, "good", { "Content-type": "text/html" });

  res.write("<h1>Hello From Node.js Server</h1>");
});

// Listening on port 8080
server.listen(8000, () => {
  console.log("Server Up!");
});
