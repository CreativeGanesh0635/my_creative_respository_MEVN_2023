const http = require('http');
var dt1 = require('./serverExample2.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html' });
    res.write("Hii am Ganesh.....");

    res.end();
}).listen(8001)