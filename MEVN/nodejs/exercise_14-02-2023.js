//callback function: It is function in which it passes parameter to second function 
//and execute result through second function  

function checkeven(num){
    console.log("Given number "+ num +" is even number..........");
}

function checkodd(num){
    console.log("Given number"+ num +" is odd number............");
}

var num = 4;
function CalulateResult(num, checkodd, checkeven) {

    if(num % 2 == 0){
        checkeven(num);
    } else {
        checkodd(num);
    }
}
CalulateResult(4, checkodd, checkeven);