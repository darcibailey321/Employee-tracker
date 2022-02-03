const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');

// Present user with options

// view all departments - READ - "SELECT * FROM [table_name]";
async function viewAllDepartments(){

}
// view roles - READ - "SELECT * FROM [table_name]";

// view all employees - READ - "SELECT * FROM [table_name]"; (Will need to do more later)
async function viewAllemployees(){

    const employees = await db.query('SELECT * FROM employee');

    console.table(employees);
}
// Add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUES (value1, value2)"

// add a role - CREATE - 
async function createRole() {

}
    // SELECT the existing department out for the 'department' table

    const departments = [
        {
            id: 1,
            name: "Sales"
        },
        {
            id: 2,
            name: "Accounting"
        }
    ];
    // .map() the results from 'department' to question data for inquirer
    const choices = departments.map( deparment => {
        return {
            name: deparment.name,
            value: deparment.id,

        }
    })
    // THEN propmpt the user for role information (inquirer)
    const answers = await inquirer
    .prompt([
        {
            type: "List",
            name: "department_id",
            choices: choices
        }
    ])
        // Take the user's answers and go INSERT them into the 'role' table

// add an employee - CREATE - 

// update an employee


//start with asking questions (inquirer)

 inquirer
    .prompt([
        {
            type: "List",
            name: "department_id",
            message: "Choice of deparment",
            choices:[
                {name: "Sales", value: 1},
                {name: "Accounting", value: 2},
            ]

    }])



    //SELECT the existing deparment out for the 'deparment' table

    const departments = [
        {
            id: 1,
            name: "Sales"
        },
        {
            id: 2,
            name: "Accounting"
        }
    ];

    //.map() the results from 'deparment to questions dat

    const choices = departments.map( deparment => {
        return {
            name: deparment.name,
            value: deparment.id,

        }
    })

    const answers = await inquirer
    .prompt([
        {
            type: "List",
        }
    ])