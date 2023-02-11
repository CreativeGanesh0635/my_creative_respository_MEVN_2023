const fs = require("fs");

    fs.readFile(demofile.txt, "utf-8", (data, error) =>{
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
    });
