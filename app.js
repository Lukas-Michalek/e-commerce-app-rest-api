// Starting Express Server -> to install express run: npm install express
// To update server in browser automatically upon changes in file instal nodemon as development dependency  => npm install --save-dev nodemon ... and then run => npx nodemon -L app.js
const express = require('express');
const app = express();

app.get('/', (request,response,next) => {
    response.send('Hello Lads! What a beautiful day to be alive!');
});



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
