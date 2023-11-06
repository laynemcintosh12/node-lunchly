const { Client } = require('pg');

const db = new Client({
  user: 'laynemcintosh12',
  host: 'localhost',
  database: 'lunchly',
  password: 'password', // Make sure the password is a string
  port: 5432, // The default PostgreSQL por
});

db.connect();

module.exports = db;
