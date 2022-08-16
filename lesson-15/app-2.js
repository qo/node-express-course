const http = require("http");

// Server Class is derived from EventEmitter class
const server = http.createServer();

server.on("request", (req, res) => {
    res.end("Hello World");
})

server.listen(5000);