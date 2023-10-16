const http = require('http');
http.createServer(function(req, res){
  let doc = require('index.html')

  let writeHeadObject = { 'Content-Type' : 'text/html' };
  res.writeHead(200, writeHeadObject);
  res.end(doc);
    
}).listen(2020);