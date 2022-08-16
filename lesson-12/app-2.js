// Callbacks

const { readFile } = require("fs");

console.log("before reading");

readFile(
    "./data/first.txt", "utf-8",
    (err, result) => {
        if (err) {
            console.log(err);
            return err;
        }
        console.log(result);
    }
);

console.log("after reading");