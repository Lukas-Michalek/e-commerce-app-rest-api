// This is a handy way how to make sure that sensitive information are hidden in case I want to publish it for example on GitHub.
// Now I will be using only variable PORT

// Note that require('dotenv').config({path: './.env'}); also works instead of require('dotenv/config');
// OR perhaps require('dotenv').config()
// 
require('dotenv').config();

module.exports = {

    PORT: process.env.PORT,

    DB: {
        PGHOST: process.env.PGHOST,
        PGUSER: process.env.PGUSER,
        PGDATABASE: process.env.PGDATABASE,
        PGPASSWORD: process.env.PGPASSWORD,
        PGPORT: process.env.PGPORT,

    }
}

