const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/")
        res.end(`<h1>Welcome to the Home Page</h1>`);
    else if (req.url === "/about")
        res.end(`<h1>Here is our short history<h1>`);
    else res.end(`<h1>Oops!</h1><h2>Looks like this page doesn't exist :(</h2><a href="/">Proceed to the Home Page</a>`);
})

server.listen(5000);