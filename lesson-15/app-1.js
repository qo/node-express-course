const EventEmitter = require("events");

const customEmitter = new EventEmitter;

customEmitter.on("response", (field, value) => {
    console.log(`Response Received:\n${field}: ${value}`);
});

customEmitter.emit("response", "id", 1);

