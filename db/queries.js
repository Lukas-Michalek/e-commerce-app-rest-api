
// User queries

const getAllUsers = 'SELECT * FROM users';
const checkEmail = 'SELECT * FROM users WHERE email = $1';
const createNewUser = 'INSERT INTO users(first_name, last_name, email, password) VALUES($1,$2,$3,$4) RETURNING id, first_name, last_name, email,  password';



// const checkCustomerEmail = 'SELECT * FROM customers WHERE email=$1'
// const createNewCustomer = `INSERT INTO customers (password, email, first_name, last_name) VALUES ($1,$2,$3,$4)`;

module.exports = {
    getAllUsers,
    checkEmail,
    createNewUser,
   
}