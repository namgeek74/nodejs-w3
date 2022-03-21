var http = require('http');
var dt = require('./date-module');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt + "/n");
    console.log(req.url);
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8081);