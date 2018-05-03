const http = require('http');
const fs = require('fs');
const static_contents = require('./static.js');
const portNum = 7077

server = http.createServer(function (req, res){
    console.log('client request URL: ', req.url);
    static_contents(req, res);
});
server.listen(portNum);
console.log(`Running on localhost at port ${portNum}`);