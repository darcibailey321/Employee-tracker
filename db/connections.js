const mysql = require("mysql2");
const inquirer = require("inquirer");
const util = require('util');


const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "crud",
  database: "employees"
});

connection.query = util.promisify( connection.query );

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log('Succesfully connected to mysql')
  }
});

module.exports = connection;