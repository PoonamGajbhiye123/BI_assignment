import fs from "fs";

export const calmetric=(req, res, q) => {
    const PI=3.14159265358979238;
    var output=-1;
    var object = q.object
    var metric = q.metric
    var radius = q.radius;
    if(object == "sphere" && metric == "volume") {
        output = (4/3)*PI*radius*radius*radius;
    } else if (object == "circle" && metric == "area"){
        output=PI*radius*radius;
    }
    if(output != -1)
        res.write(metric+" of "+object+" is "+output)
    res.end();
}