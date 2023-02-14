// Q.Explain Hoisting 
x = 10;            //intialization
console.log(x);    //display variable x
var x;             //declaration

//Expected output: 
//10

//Q. Difference between var and let
//var: it can be changed/updated
//let: after declaration it cannot be changed/updated
let value1 = 10;          //this let has scope upto line 10, 11, 17, 18
var value2 = 20;          
{
    let value1 = 100;     //this let has scope upto line 12 to 16
    var value2 = 200;
    console.log(value1);
}
console.log(value1);
console.log(value2);

//Expected output: 
//100
//10
//200

//Q. Differnce between null and undefined
var value3 = null;
var value4;
console.log(value3);
console.log(value4);

//Expected output: 
//null
//undefined
