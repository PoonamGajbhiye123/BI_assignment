import http from "http";
//const http = require("http");
import {myFunc} from "./router/ageRouter.js";
const Port = 8080;

//Creating a server
const server = http.createServer()
server.on('request', myFunc)  //calling myFunc

//listening a server port no.
server.listen(Port, () =>{
    console.log("Server Created..!");
})