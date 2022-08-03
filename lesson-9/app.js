const { readFile, writeFile } = require("fs");

readFile("./files/first.txt", "utf8", (err, result) => {

    if (err) {
        console.log(err);
        return;
    }

    const first = result;

    readFile("./files/second.txt", "utf8", (err, result) => {

        if (err) {
            console.log(err);
            return;
        }

        const second = result;

        writeFile(
            "./files/result-async.txt",
            `result: ${first} ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
            }
        )

    })
})