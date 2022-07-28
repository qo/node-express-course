const os = require("os");
console.log(os.userInfo());
console.log(os.uptime());
const currentOS = {
    type: os.type(),
    release: os.release(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem()
}
console.log(currentOS);