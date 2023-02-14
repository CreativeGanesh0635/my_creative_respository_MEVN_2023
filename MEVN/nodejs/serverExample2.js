const http = require('http');
var dt2 = require('./serverExample3.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html' });
    res.write("Hii I am back with new port...");

    res.end();
}) .listen(8002);

