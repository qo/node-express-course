const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Received");
    res.writeHead(200, {"content-type":"text/html"});
    if (req.url === "/")
        res.write("<h1>Home Page</h1>");
    else if (req.url === "/about")
        res.write("<h1>About Page</h1>");
    else {
        res.writeHead(404, {"content-type":"text/html"});
        res.write("<h1>Page Not Found</h1>");
    }
    res.end();
    console.log("Response Sent");
});

server.listen(5000);