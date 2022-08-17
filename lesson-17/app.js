const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Received");
    res.writeHead(200, {"content-type":"text/html"});
    res.write("<h1>Home Page</h1>");
    res.end();
    console.log("Response Sent");
});

server.listen(5000);

