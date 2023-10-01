const fs = require("fs");

function readFirstFiveCallback(error, filedata) {
    if(error){
        console.error(error);
        return;
    }
    const Lines = filedata.toString().split("\n");
    Lines.slice(0, 5).forEach((line) => {
        console.log(line);
    });
}

fs.readFile("./demofile.txt", readFirstFiveCallback);