import colors from "colors";
import { EventEmitter } from "events";
colors.enable();

const eventEmitter = new EventEmitter();

eventEmitter.on("red", () => {
    console.log("RED".red.bgRed);
    setTimeout(() => {
        eventEmitter.emit("yellow");
    }, 3000);
});

eventEmitter.on("yellow", () => {
    console.log("YELLOW".yellow.bgYellow);
    setTimeout(() => {
        eventEmitter.emit("green");
    }, 3000);
});

eventEmitter.on("green", () => {
    console.log("GREEN".green.bgGreen);
    setTimeout(() => {
        eventEmitter.emit("red");
    }, 3000);
});

eventEmitter.emit("red");