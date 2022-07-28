const path = require("path");

console.log(path.sep);
console.log(path.delimiter);

const filePath = path.join("files", "text", "name.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "files", "text", "name.txt");
console.log(absolute);