var http = require('http');
var dt = require('./date-module');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    // res.writeHead(200, { 'Content-Type': 'text/html' });

    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write(txt + "/n");
    // console.log(req.url);
    // res.write("The date and time are currently: " + dt.myDateTime());
    // res.end();
    fs.readFile('template.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
    fs.appendFile('sampletxt.txt', 'Hello content!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    fs.writeFile('sampletxt.txt', 'It is content was changed', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}).listen(8080);