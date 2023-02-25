
// This file handles all the business logic regarding to user

const pool = require('../db/dbConnect');
const queries = require('../db/queries');

//Get all users
const getAllUsers = (request, response) => {
    pool.query(queries.getAllUsers, (error,results) => {
        if (error) throw error;

        response.status(200).json(results.rows);
    })
}

module.exports = {
    getAllUsers,
}


// // Get List of All Customers
// const getCustomers = (request, response) => {
//     pool.query(queries.getCustomers, (error,results) => {
//         if (error) throw error;

//         response.status(200).json(results.rows);
//     });
// };


// // Create/Register New Customer
// const createCustomer = (request, response) => {

//     // Check if user exists according to email which is unique
//     const { password, email, first_name, last_name} = request.body;
    
//     pool.query(queries.checkCustomerEmail, [email], (error,results) => {
//         // if there is such an email results.rows array will containt it and thus will not be 0 = falsy but truthy
//         const emailFound = results.rows.length;

//         if(emailFound){
//             response.send(`Email ${email} is already in DB`);
//         }

//         // or elase create user in DB
        
        
//         pool.query(queries.createNewCustomer, [password, email, first_name, last_name], (error, results) => {
//             if (error) throw error;

//             response.status(201).send('Customer created successfuly!');
//         }) 
//     })     
// }

// module.exports = {
//     getCustomers,
//     createCustomer,
// }