// Require node http module
const http = require('http');


// Create server http.createServer
// statusCode
const server = http.createServer((request, response) => {

  console.log('REQUEST URL', request.url);

  if(request.url === "/"){
    response.write(`
      <html>
      </html>
    `);
    response.end();
  } if(request.url === "/ironhack") {
    response.write('welcome to Ironhack');
    response.end();
  } else {
    response.statusCode = 404;
    response.end();
  }

  

})


// Start server on port 3000
server.listen(3000);