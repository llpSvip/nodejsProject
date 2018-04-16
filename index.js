var http = require("http");

http.createServer(function (require, response) {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end('hello world\n');
}).listen(80)

console.log('Server running at http://127.0.0.1:80/')
