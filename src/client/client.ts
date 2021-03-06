import Tool from "../utils/tool";
import * as Ws from "ws";
import { getConf } from "../conf";

let timeoutObj: any = null

const ClientApp = {
    ws: null,
    run: () => {
        ClientApp.connectServer();
    },
    connectServer: () => {
        try {
            const gConf = getConf();
            ClientApp.ws = new Ws(gConf.serverWsAddr);
            ClientApp.ws.onopen = e => {
                ClientApp.ws.send(
                    JSON.stringify({
                        type: "clientInfo",
                        data: Tool.getClientInfo()
                    })
                );
                ClientApp.sendHeart();
                console.log(gConf.serverWsAddr + " connected success!");
            };
            ClientApp.ws.onmessage = e => {
                try {
                    const msg: any = JSON.parse(e.data);
                    ClientApp.handleMessage(msg);
                } catch (err) {
                    console.log(err);
                }
            };
            ClientApp.ws.on("close", () => {
                clearTimeout(timeoutObj)
                console.log(gConf.serverWsAddr + " closed!");
                setTimeout(() => {
                    ClientApp.connectServer();
                }, 1000);
            });
            ClientApp.ws.on("error", err => {
                console.log(err);
            });
        } catch (err) {
            console.log(err);
        }
    },
    sendHeart: () => {
        try {
            ClientApp.ws.send(
                JSON.stringify({
                    type: "heartTest",
                    data: null
                })
            );
        } catch (err) {
            console.log(err);
        }
        clearTimeout(timeoutObj)
        timeoutObj = setTimeout(() => {
            ClientApp.sendHeart();
        }, 1000);
    },
    handleMessage: msg => {
        switch (msg.type) {
            default:
                break;
        }
    }
};

export default ClientApp;
