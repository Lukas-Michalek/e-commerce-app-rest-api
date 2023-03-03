// This file handles all reoutes related to user(login, registration, ...)

const { Router } = require('express')
const userController = require('./../controllers/userController')

const { SESSION_SECRET } = require('./../config/general_config')
const session = require('express-session')


// const pool = require('./../db/dbConnect')
// const queries = require('./../db/queries')
// const bcrypt = require('bcrypt')

const flash = require('express-flash')


const passport = require('passport')
const initializePassport = require('./../config/passportConfig')


const userAuthentication = require('./../middleware/userAuthentication')

const { authenticate } = require('passport')
initializePassport(passport)

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

router.get(
    '/register',
    userAuthentication.checkIfAuthenticated,
    userController.renderUserRegisterPage
)

router.get(
    '/login',
    userAuthentication.checkIfAuthenticated,
    userController.renderUserLoginPage
)

router.get(
    '/dashboard',
    userAuthentication.checkIfNotAuthenticated,
    userController.renderDashboard
)

router.get('/logout', userController.renderLogout)

router.post('/register', userController.registerUser)

router.post('/login', userController.loginUser)

module.exports = router
