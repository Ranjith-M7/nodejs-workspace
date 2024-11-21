import http from "http";
import fs from "fs";

// create our server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("10. Serving Pages/public/index.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("10. Serving Pages/public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" });
    res.end("<h1>Page not found :(</h1>");
  }
});

server.listen(8000, () => console.log("Server Up!"));
