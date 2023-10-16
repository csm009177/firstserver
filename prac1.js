const http = require('http');

const server = http.createServer((req, res) => {

})

server.listen(8080, (err) => {
  if(!err) {
    console.log('server error');
  } else {
    console.log('port 8080 : launch')
  }
})