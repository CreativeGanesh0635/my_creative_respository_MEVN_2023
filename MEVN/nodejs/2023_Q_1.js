//Q.1_1 call myownmodule in this module
const myownmodule = require("./myownmodule");

// myownmodule.display();
//Q.1_2 closure e.g To Show Number is Even or Odd
function outer(){
    var outervar = 100;
    function inner(){
        if(outervar % 2 == 0){
            console.log("it is even...");
        }
        else{
            console.log("it is odd...");
        }
    }
    inner();
}
outer();

//Q.1_3 Read another file using fs
const fs = require('fs');

fs.readFile("demofile.txt", "utf-8", (error, data) =>{
    if(error){
        console.log("Its a Error...");
    }
    else{
        console.log(data);
    }
})

//Q.1_4 Compound Interest p = principle, r = rate, t = time
	let p = 10000, r = 5, t = 2;

	let A = p *
		(Math.pow((1 + r / 100), t));
	let CI = A - p;

	console.log("Compound interest is " + CI);
