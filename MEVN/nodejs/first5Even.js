const fs = require("fs");

async function readfirst5Even() {
    const file = await fs.readFile("./demofile.txt");

    const line = file.toString().split("\n");

    for(let i = 0; i < 5; i++){
        console.log(line[i]);
    }
}

readfirst5Even();