import * as fs from "fs";
const logfile =
    "log-" +
    new Date().toLocaleDateString() +
    "_" +
    new Date().toLocaleTimeString().replace(/:/g, "-") +
    ".txt";
fs.exists("./log", exists => {
    if (!exists) {
        fs.mkdir("./log", err => {
            if (err) {
                return false;
            }
        });
    }
});

const logWrite = str => {
    fs.writeFile("./log/" + logfile, str + "\n", { flag: "a" }, err => {
        if (err) {
            console.log(err);
        }
    });
};
export default logWrite