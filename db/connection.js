const mysql = require('mysql2/promise');
require('dotenv').config(); // This loads the environment variables from .env file

const connection = mysql.createPool({
  host: process.env.DB_HOST,       // Using the .env variable
  user: process.env.DB_USER,       // Using the .env variable
  password: process.env.DB_PASSWORD, // Using the .env variable
  database: process.env.DB_NAME,   // Using the .env variable
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = connection;
