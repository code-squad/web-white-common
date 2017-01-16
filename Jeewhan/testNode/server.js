//server.js
var http = require('http');
var url = require('url');

http.createServer(function (request, response) { 
  console.log("url: " + url.parse(request.url).pathname); 
  response.writeHead(200, {'Content-Type': 'text/html'}); 
  response.end('<h1>Hello World<h1>\n');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');
