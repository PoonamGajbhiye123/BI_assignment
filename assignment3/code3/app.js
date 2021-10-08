import http from "http";
import {myfunc} from "./router/router.js";

const server= http.createServer()
server.on('request', myfunc)

server.listen(8080, ()=>{
    console.log("Server Created..!")
})