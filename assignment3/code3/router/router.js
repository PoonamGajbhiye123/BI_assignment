import url from "url";
import {calmetric} from "../controller/controller.js";

export const myfunc=(req,res) => {
    res.writeHead(200,{"Content-Type":"text/html"})
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    var route=url.parse(req.url,true).pathname;

    if (route === "/metrics"){
        calmetric(req,res,queryObject)
    } else {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>404 Page Not Found</h1>")
        res.end();
    }
}