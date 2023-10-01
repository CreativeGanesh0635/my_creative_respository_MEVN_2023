const http = require('http');
const express = require("express");

const app = express();

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html' });
    res.write("Hii am Ganesh.....");

    res.end();
}).listen(5000);

app.get('/', function (req, res) {
    res.writeHead(250, ('Content-type', 'text/html'));
    res.write('Hello, I am Ganesh');
    res.end();
});
