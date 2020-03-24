import app from "./express";

export default {
    run: () => {
        // 获取游戏数据
        app.all("/api/getInfo", (req, res) => {
            res.send({
                code:200
            });
        });
    }
};
