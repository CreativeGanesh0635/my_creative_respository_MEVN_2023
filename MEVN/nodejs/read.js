const fs = require("fs");

function readUTFBFile(filepath) {

    fs.readFile(filepath, "utf-8", (data, error) =>{
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
    });
}

readUTFBFile("./demofile.txt");