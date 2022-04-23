const express = require('express');

// Create the Express app
const app = express();

// Set up static files - Public content will be available to the views
app.use(express.static('public'));

app.get('/', (request, response, next) => {

  // response.send(`
  //   <h1>Welcome to Express</h1>
  // `)
  console.log(__dirname);
  response.sendFile(__dirname + '/views/home.html');
})

app.get('/laia', (request, response, next) => {

  // response.send(`
  //   <h1>Welcome to Express, Laia</h1>
  // `)
  response.sendFile(__dirname + '/views/laia.html')
})

app.get('/nodemon', (request, response, next) => {

  // response.send(`
  //   <h1>Welcome to Express, Laia</h1>
  // `)
  response.sendFile(__dirname + '/views/laia.html')
})

app.post('/signup', (request, response, next) => {
  // Receive data from client form
  // Save this data in database
  // Return a message client
})

// Start the app in the port 3000
app.listen(3000, () => console.log('Listening in port 3000'));