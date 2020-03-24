// node服务配置
import ClientApp from "./client/client"
import { readConf } from "./conf"

readConf().then(()=>{
    ClientApp.run()
})
