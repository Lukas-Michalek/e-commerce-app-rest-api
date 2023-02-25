# E-Commerce App using REST API
 
## Used technologies:
 - Node.js
 - Express.js
 - javascript


## **Main Libraries**
 - pg - for potgres connection
 - morgan - 
 - dotenv - to be able to use environment variables and thus giving me more privacy
 - bodyparser - on order to be able to pass JSON objects and to work with them ... most notable pieces of middleware from this library are: `express.json() and express.urlencoded({ extended: false })`
 - ejs library -> to be able to see the simple front end in order to implement user login, registration and logout
 - bcrypt library -> to be able to hash passwords in order to increase security
 - express-flash library -> Flash is an extension of connect-flash with the ability to define a flash message and render it without redirecting the request.
 - Express-session - an HTTP server-side framework used to create and manage a session middleware.  



### Note to self
 - I have started with nodemon and changing start script in package.json accordingly