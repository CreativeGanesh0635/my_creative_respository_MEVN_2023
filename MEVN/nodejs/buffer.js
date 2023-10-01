var buffer1 = Buffer.alloc(100);

buffer1.write("i am here");

var a = buffer1.toString('utf-8');// transfer the buffer content to string

console.log(a);// printing value
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var bufferSource = new Buffer('ABC');//deprecated
var bufferDestination = Buffer.alloc(3);
bufferSource.copy(bufferDestination);
var Data = bufferDestination.toString('utf-8');
console.log(Data);

//Slice
var bufferOld = new Buffer('INDIA IS GREAT');
var bufferNew = bufferOld.slice(0,4);
console.log(bufferNew.toString());

//Concat
var bufferOne = new Buffer('INDIA');
var bufferTwo = new Buffer(' IS GREAT ');
var bufferFour = new Buffer('JAY HAIND');
var bufferThree = Buffer.concat([bufferOne, bufferTwo, bufferFour]);
console.log(bufferThree.toString());
