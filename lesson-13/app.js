const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/")
        res.end("Home Page");

    else if (req.url === "about")
        res.end("About Page");

    else {
        // do some time-consuming operations
        for (let i = 0; i < 1000000; i++)
            console.log(i);
        // when you access any page
        // (not "error page" exclusively)
        // this will run,
        // and server won't be able
        // to run anything but this for-loop,
        // so time-consuming operations like this
        // have to be offloaded
        res.end("Error Page");
    }

});

server.listen(
    5000,
    () => console.log("Started on port 5000...")
);