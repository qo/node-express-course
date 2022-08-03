const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./files/first.txt");
const second = readFileSync("./files/second.txt");

writeFileSync(
    "./files/result-sync.txt",
    `result: ${first} ${second}\n`,
    {
        flag: "a"
    }
);