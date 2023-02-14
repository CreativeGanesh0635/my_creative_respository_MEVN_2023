var http = require('http');
var dt3 = require('./serverExample1.js');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("the date and time for currently: ");

    res.end();
}).listen(8003);
