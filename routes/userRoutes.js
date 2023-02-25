// This file handles all reoutes related to user(login, registration, ...)

const { Router } = require('express');
const userController = require('./../controllers/userController');

const { SESSION_SECRET } = require('./../config/general_config');
const session = require('express-session');

const bcrypt = require('bcrypt');
const flash = require('express-flash');
const pool = require('./../db/dbConnect');
const queries = require('./../db/queries');

const passport = require('passport');
const initializePassport = require('./../config/passportConfig');

initializePassport(passport);

const router = Router()

router.use(
    session({
        secret: SESSION_SECRET,

        resave: false,

        saveUninitialized: false,
    })
)

router.use(passport.initialize());

router.use(passport.session());

router.use(flash());


// get all users (testing purposes)
router.get('/getallusers', userController.getAllUsers)

router.get('/register', (request, response) => {
    response.render('register')
});

router.get('/login', (request, response) => {
    response.render('login')
});

router.get('/dashboard', (request, response) => {
    response.render('dashboard')
});

router.post('/register', async (request, response) => {
    const { first_name, last_name, email, password, password2 } = request.body

    // for testing purposes if the information are being sent correctly from front end
    console.log('Data sent from form through POST =>  ')
    console.log({  
        first_name,
        last_name,
        email,
        password,
        password2,
    })

    // Form Validation => If we are getting any errors in the form, these will be pushed into errors array
    let errors = []

    //1. Validation check => All form fields are entered
    if (!first_name || !last_name || !email || !password || !password2) {
        errors.push({ message: 'Please enter all fields!' })
    }

    //2. Validation check => Password must match
    if (password != password2) {
        errors.push({ message: 'Passwords must match!' })
    }

    //3. Validation check => Password must by at least than 6 char
    if (password.length < 6) {
        errors.push({
            message: 'Passwords needs to be at least 6 characters long!',
        })
    }

    // If there are any errors present, redirect user back to register page together with errors so they can be shown
    if (errors.length > 0) {
        response.render('register', { errors })
    }

    // if there were no errors and user filled the form correctly
    else {
        // note that bcrypt is ASYNC function and therefore the whole POST method needs to be made ASYNC

        // bcrypt.hash([what i want to hash],[how many rounds]) -> the larger number of rounds the more complex the algorythm but the more time it takes to generate hash

        let hashedPassword = await bcrypt.hash(password, 10)
        console.log('Password after hashing => ' + hashedPassword)

        // check if the user already exists according to email.
        pool.query(queries.checkEmail, [email], (error, results) => {
            if (error){ 
                throw error
            }

            console.log('This user used duplicate email: ')
            console.log(results.rows);

            if (results.rows.length > 0) {
                errors.push({
                    message:
                        'Email already used. Please choose different email.',
                })

                response.render('register', { errors })
            }

            // or if there is no user in database with that email, we will register the user
            else {
                pool.query(
                    queries.createNewUser,
                    [first_name, last_name, email, hashedPassword],
                    (error, results) => {
                        if (error){ 
                            throw error;
                        }

                        console.log('This user was created: ');
                        console.log(results.rows);

                        

                        //sends flash message to login page
                        request.flash(
                            'success_message',
                            `${first_name} you are now registered. Please Log In.`
                        )

                        response.redirect('login');
                    }
                )
            }
        })
    }
})

// what failureFlash: true does is that if we can not authenticate, express will render one of the false messages in passportConfig usch as {message: "Email is not registered / User does no exist."} or { message: "Password is not correct!"});

router.post(
    '/login',
    passport.authenticate('local', {
        successRedirect: '/users/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true,
    }) 
)

module.exports = router
