import FileTool from "./tool/fileTool"

// 默认配置
let gConf = {
    "port":"9089",
}

export const readConf = () => {
    return new Promise((resolve) => {
        FileTool.readFile("./conf.json").then((conf: any)=>{
            if(conf.data){
                gConf = {
                    ...gConf,
                    ...conf.data
                }
                resolve(gConf)
            }
        });
    })
}

export const getConf = (): any => {
    return gConf
}

export const setConf = (obj) => {
    gConf = {
        ...gConf,
        ...obj
    }
}

export default gConf


