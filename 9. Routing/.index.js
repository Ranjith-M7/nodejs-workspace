import http from "http";

// create our server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-type": "text/html" });
    res.end("<h1>Home page</h1>");
  } else if (req.url === "/contact") {
    res.writeHead(200, "OK", { "Content-type": "text/html" });
    res.end("<h1>Contact page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-type": "text/html" });
    res.end("<h1>About page</h1>");
  } else {
    res.writeHead(404, "BAD", { "Content-type": "text/html" });
    res.end("<h1>Page not found :)</h1>");
  }
});

// Listening on port 8080

server.listen(8000, () => console.log("Server Up!"));
