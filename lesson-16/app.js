const http = require("http");
const { writeFileSync, readFileSync, createReadStream } = require("fs");

const path = "./data/big.txt";

// Uncomment this to create a 5MB file
//
// let data = "";
//
// for (let i = 0; i < Math.pow(10, 6); i++) {
//     console.log(i);
//     data += `${i}`;
// }
//
// writeFileSync(path, data);

http.
    createServer((req, res) => {

        // Send the whole file to the user
        // It takes some time to load
        // even a 5MB file
        // const data = readFileSync(path);
        // res.end(data);

        // Send the file by chunks via streams
        const stream = createReadStream(path, "utf-8");
        stream.on("open", () => {
            stream.pipe(res);
        })
        stream.on("error", (err) => {
            res.end(err);
        })
}).listen(5000);