import url from "url";
import {calAge} from "../controller/ageCtrl.js";

export const myFunc = (req, res) => {
    res.writeHead(200, {"content-Types":"text/html"})
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject);
    var route = url.parse(req.url,true).pathname;

    if (route === "/age"){
        calAge(req.res,queryObject);
    }
    else {
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1>404 page Not Found</h1>")
        res.end();
    }
}