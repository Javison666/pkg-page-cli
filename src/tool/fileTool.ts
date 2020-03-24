import * as fs from "fs";

class FileTool {
    public static readFile(path: string) {
        return new Promise(resolve => {
            fs.readFile(path, "utf-8", (err, data) => {
                if (err) {
                    resolve({
                        err
                    });
                }
                resolve({
                    data
                });
            });
        });
    }
    public static deleteFile(path: string) {
        return new Promise(resolve => {
            fs.unlink(path, (err) => {
                if (err) throw err;
                resolve();
            });
        })
    }
    public static writeFile(path: string, str: string) {
        return new Promise(resolve => {
            fs.writeFile(path, str, { 'flag': 'a' }, function (err) {
                if (err) {
                    throw err;
                }
                resolve();
            });
        })
    }
    constructor() { }
}
export default FileTool;
