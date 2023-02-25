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
 - Express-session - an HTTP server-side framework used to create and manage a session middlew for log in and register
- passport and passport-local for local strategy this strategy is being used in html forms
- 
- Passport is Express-compatible authentication middleware for Node.js.
Passport's sole purpose is to authenticate requests, which it does through an extensible set of plugins known as strategies. Passport does not mount routes or assume any particular database schema, which maximizes flexibility and allows application-level decisions to be made by the developer. The API is simple: you provide Passport a request to authenticate, and Passport provides hooks for controlling what occurs when authentication succeeds or fails.




### Note to self
 - I have started with nodemon and changing start script in package.json accordingly