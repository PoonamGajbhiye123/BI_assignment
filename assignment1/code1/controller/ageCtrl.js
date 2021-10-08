import fs from "fs";

export const calAge = (req, res, q) => {
    var dob = new Date()
    var d = dob.getDate();
    var m = dob.getMonth() + 1;
    var y = dob.getFullYear();
    var age = y - q.year

    if (m < q.month){
        age--;
    }
    else if (m == q.month){
        if(d < q.date){
            age--;
        }
    }


    res.write("<p>Hello "+q.name+"</p> <p>You are currently "+age+" years old</p>" );
    res.end();
}