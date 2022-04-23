const express = require('express');

const students = [
  {
    name: "Ironhacker",
    surname: "Express master",
    address: "Street avenue",
    hobbies: [
      "Coding",
      "Football",
      "Dancing"
    ],
    programming: [
      {
        name: "JavaScript",
        level: 10
      },
      {
        name: "Python",
        level: 2
      }
    ]
  },
  {
    name: "Ironhacker 2",
    surname: "HBS master",
    address: "Street avenue 2",
    hobbies: [
      "Coding",
      "Football",
      "Dancing"
    ],
    programming: [
      {
        name: "JavaScript",
        level: 1
      },
      {
        name: "Python",
        level: 10
      }
    ]
  }  
];

// Create Express app
const app = express();

// Set up the templating engine - Handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// Set up static files - Making the public content available to the views
app.use(express.static('public'));

// Routes configurations
app.get('/', (request, response, next) => {
  const data = {
    name: "Ironhacker",
    surname: "Express master",
    address: "Street avenue",
    hobbies: [
      "Coding",
      "Football",
      "Dancing"
    ],
    programming: [
      {
        name: "JavaScript",
        level: 10
      },
      {
        name: "Python",
        level: 2
      }
    ]
  }
  
  response.render('index', data);
})

app.get('/students', (request, response, next) => {

  response.render('students', { students: students })
})

app.get('/random-student', (request, response, next) => {
  const data = students[Math.floor(Math.random() * students.length)];
  response.render('randomStudent', data)
})

// Start app in port 3000
app.listen(3000, () => console.log('Listening in port 3000'));