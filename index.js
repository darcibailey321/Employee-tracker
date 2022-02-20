const mysql = require("mysql2");
const inquirer = require("inquirer");
const db = require("./db/connections");
const cTable = require("console.table");

async function menu() {
  const menuOptions = [
    {
      value: 1,
      name: "View All Departments",
    },
    {
      value: 2,
      name: "View All Roles",
    },
    {
      value: 3,
      name: "View All Employees",
    },
    {
      value: 4,
      name: "Add New Department",
    },
    {
      value: 5,
      name: "Add New Role",
    },
    {
      value: 6,
      name: "Add New Employee",
    },
    {
      value: 7,
      name: "Update Employee Role",
    },
    {
      value: 8,
      name: "Finished",
    },
  ];

  const answers = await inquirer
    .prompt([
      {
        type: "list",
        name: "menuOptions",
        message: "Please choose an option",
        choices: menuOptions,
      },
    ])

    .then(async (answers) => {
      let optionAnswer = answers.menuOptions;
      // console.log(optionAnswer);
      switch (optionAnswer) {
        case 1:
          try {
            const departmentData = await viewAllDepartments();
            console.table(departmentData[0]);
          } catch (error) {
            console.log(error);
          }
          break;
        case 2:
          try {
            const roleData = await viewAllRoles();
            console.table(roleData[0]);
          } catch (error) {
            console.log(error);
          }
          break;
        case 3:
          try {
            const employeeData = await viewAllEmployees();
            console.table(employeeData[0]);
          } catch (error) {
            console.log(error);
          }
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
        case 8:
          finished();
          break;
      }
    });
}
menu();

async function viewAllDepartments() {
  return db.promise().query("SELECT * FROM Departments");

}


async function viewAllRoles() {
  return db.promise().query("SELECT * FROM roles");

}


async function viewAllEmployees() {
  return db.promise().query("SELECT * FROM employees");

}


async function createDepartment() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "depName",
      message: "What department do you want to add?",
    },
  ]);
  const insertResult = await db.query("INSERT INTO departments SET ?", answers);
  viewAllDepartments();
  return;
}

async function createRole() {
  try {
    const departmentData = await viewAllDepartments();
    const departmentList = departmentData[0];
    // console.log(departmentList);
    const departmentChoices = departmentList.map((departments) => {
      return {
        name: departments.depName,
        value: departments.id,
      };
    });
    // console.log(departmentChoices);
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "department_id",
        message: "Select a department.",
        choices: departmentChoices,
      },
      {
        type: "input",
        name: "title",
        message: "What role do you want to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
    ]);
    const insertResult = await db.query("INSERT INTO roles SET ?", answers);
    viewAllRoles();
    return;
  } catch (error) {}
}
async function createEmployee() {
  try {
    const employeeData = await viewAllEmployees();
    const employeeList = employeeData[0];
    // console.log(employeeList);
    const employeeChoices = employeeList.map((employees) => {
      return {
        name: employees.first_name,
        value: employees.id,
      };
    });
    // console.log(employeeChoices);
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "role_id",
        message: "Select a role.",
        choices: roleChoices,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Select a manager.",
        choices: managerChoices,
      },
      {
        type: "input",
        name: "first_name",
        message: "What is this employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is this employee's last name?",
      },
    ]);

    // console.log(answers)
  } catch (error) {}
}
