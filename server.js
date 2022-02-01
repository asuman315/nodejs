const http = require('http');

//create server object
// const server = http.createServer();

// server.on('connection', socket => console.log('New connection....'))

// server.listen(5000);

const server = http.createServer((req, res) => {
 if (req.url === '/') {
  res.write('hello world');
  res.end();
 }
});

server.listen(3000);