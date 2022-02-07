const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connections');
const cTable = require('console.table');

// Present user with options
async function menu() {
    const menuOptions = [
        {
            id:1,
            name: "View All Departments",
        },
        {
            id:2,
            name: "View All Roles",
        },
        {
            id:3,
            name: "View All Employees",
        },
        {
            id:4,
            name: "Add New Department",
        },
        {
            id:5,
            name: "Add New Role",
        },
        {
            id:6,
            name: "Add New Employee",
        },
        {
            id:7,
            name: "Update Employee Role",
        },
        {
            id:7,
            name: "Update Employee Role",
        },
    ]
};

const answers = await inquirer.prompt([
    {
        type: "list",
        name: "menuOptions",
        message: "Please choose an option",
        choices: choices,
    },
])

.then((answers) => {
    answers = answers.menuOptions
    switch (answers) {
        case 1:
            viewAllDepartments();
            break;
        case 2:
            viewAllRoles();
            break;
        case 3:
            viewAllEmployees();
            break;
        case 4:
            createDepartment();
            break;
        case 5:
            createRole();
            break;
        case 6:
            createEmployee();
            break;
        case 7:
            updateEmployeeRole();
            break;
            
        }
    });


// view all departments - READ - "SELECT * FROM [table_name]";
async function viewAllDepartments(){

}
// view roles - READ - "SELECT * FROM [table_name]";
async function viewAllRoles(){

// view all employees - READ - "SELECT * FROM [table_name]"; (Will need to do more later)
async function viewAllEmployees(){

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
            name: "Engineering"
        },
        {
            id: 3,
            name: "Finance"
        },
        {
            id: 4,
            name: "Legal"
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
                {name: "Engineering", value: 2},
                {name: "Finance", value: 3},
                {name: "Legal", value: 4},
            ]

    }])

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