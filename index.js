var http = require('http');
var dt = require('./date-module');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

// import uc from "upper-case";

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!"));

    let str = "Here is another string";
    res.write(str.toUpperCase());
    res.end();
}).listen(8080);