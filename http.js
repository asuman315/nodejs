//HTTP Module helps to setup our own server

/*grab the http module named http and store it in the http variale*/
const http = require('http');

/*use a createServer method*/
const server = http.createServer(
 /*looks for a call back with two parameters both of which are objects and can be named whatever i like. The first parameter represents and incoming request and the second parameter represents a response that we are sending back*/
 (req, res) => {
  if (req.url /*url is a property of the req object/parameter*/ === '/') {
   console.log(req);
   res.end('Welcome Again to our Home Page')
  }
  if (req.url === '/about') {
   res.end('Here is my Short Story');
  }
  /*Set up a default response if the user enters a wrong address */
  res.end(`<h1>Oops! Page does not exist</h1>
  <p>We can't seem to find the page the page you are looking for.</p> <a href='/'>Back To Home</a>`)

  //res.write('Welcome to our Home Page')
  //res.end();
 });

/* Save what our server will be listening to. What do web servers do? They keep on listening to requests */

server.listen(5000);

