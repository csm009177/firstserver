const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'text/html'})
  // res.write('launch')
  res.end('launch')
})

server.listen(8080, (err) => {
  if(!err) {
    console.log('server error');
  } else {
    console.log('port 8080 : launch')
  }
})