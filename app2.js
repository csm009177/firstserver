const http = require('http');
http.createServer(function(req, res){
  let writeHeadObject = { 'Content-Type' : 'text/html' };
  res.writeHead(200, writeHeadObject);
  res.end("hellow")
}).listen(2020);