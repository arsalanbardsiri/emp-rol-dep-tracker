const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to the database:", err);
    // Optionally, you can try reconnecting here or exit gracefully
    return;
  }
  console.log("Connected to the database successfully!");
});

module.exports = connection;
