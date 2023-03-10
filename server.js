// Entry point of application 

// Starting Express Server -> to install express run: npm install express
// To update server in browser automatically upon changes in file instal nodemon as development dependency  => npm install --save-dev nodemon ... and then run => npx nodemon -L app.js

const express = require('express')
const app = express()

const userRoutes = require('./routes/userRoutes');

// One way is to use PORT from config.js
// const { PORT } = require('./general_config');
// The other is to use it like this:
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;

// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.set('view engine', 'ejs');


// This middleware allows me to 
app.use(express.json());

// This piece of middleware allows us to send details from the Front End such as name, email and password details to our server
app.use(express.urlencoded({ extended: false }));




app.get('/', (request, response) => {
    response.render('This is the first thing user sees')
});


// All user related routes
app.use('/users', userRoutes);




app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})
