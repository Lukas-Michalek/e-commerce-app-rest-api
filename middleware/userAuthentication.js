const passport = require('passport');


// If user is logged in => is authenticated => he will be automatically redirected to dashboard, where if he is not authenticated, the middleware will simply jump to next middleware(so he won't be blocked from accessing what he wants).

// In other words. User wants to get to register or login page. Middleware checkIfAuthenticated checks if he is authenticated(logged in). If he IS authenticated the middleware will forceably redirect him to dashboard as he is not allowed to access login or register webpage(he is ALREADY logged in and therefore registered)

function checkIfAuthenticated(request, response, next){
    if(request.isAuthenticated()){
        return response.redirect('/users/dashboard');
    };
    next();
};


// checkNotAuthenticated => when user is at this route middleware checks if he is authenitcated before moving to (req, res) section. In other words user that is not authenticated(logged in) cannot access dashboard or any other site except login and register without logging in first

function checkIfNotAuthenticated(request, response, next){
    if(request.isAuthenticated()){
        return next();
    }

    response.redirect('/users/login');
};


module.exports = {
    checkIfAuthenticated,
    checkIfNotAuthenticated,
}


