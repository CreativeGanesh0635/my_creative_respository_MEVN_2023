var fs = require('fs');

 var rs = fs.createReadStream('./demofile.txt');

 rs.on('open', function() {
    console.log('This File is Open');
 })