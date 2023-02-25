// Database Connection
// First install postgres connector for database pg => npm install pg

const { Pool } = require('pg');

const { DB } = require('../config/general_config');

const pool = new Pool({
    user: DB.PGUSER,
    host: DB.PGHOST,
    database: DB.PGDATABASE,
    password: DB.PGPASSWORD,
    port: DB.PGPORT,
})

module.exports = pool;

