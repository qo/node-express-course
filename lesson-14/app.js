const { readFile, writeFile } = require("fs").promises;

const start = async() => {
    try {
        const first = await readFile("./data/first.txt", "utf-8");
        const second = await readFile("./data/second.txt", "utf-8");
        await writeFile("./data/result.txt", `First and Second Files Merged:\n${first}\n${second}`);
    }
    catch (error) {
        console.log(error);
    }
}

start();