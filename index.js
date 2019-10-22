var http = require('http');
var url = require('url');
var fs = require('fs');

/*HTTP, FS*/
// http.createServer(function (req, res) {
//     fs.appendFile('text.txt', 'Hello, world', function (err) {
//         if (err) throw err;
//         console.log("success!");
//     })
//     fs.readFile('text.txt', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
//     fs.unlink('text.txt', function (err) {
//         if (err) throw err;
//         console.log('deleted!');        
//     })
// }).listen(8080);

/*URL*/
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'
// console.log(qdata);


http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    fs.readFile("." + q.pathname, function(err, data) {
        if (err) {
            console.error(err.message);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);