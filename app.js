const inquirer = require('inquirer');
const mysql = require('mysql2');

// Create a database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Minecrafter17',
    database: 'employeeManager_db', 
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
    // Call a function to start the application
    startApp();
});

// Function to start the application
function startApp() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View all departments',
                    'View all roles',
                    'View all employees',
                    'Add a department',
                    'Add a role',
                    'Add an employee',
                    'Update an employee role',
                    'Exit',
                ],
            },
        ])
        .then((answer) => {
            // Perform actions based on the user's choice
            switch (answer.action) {
                case 'View all departments':
                    viewDepartments();
                    break;
                case 'View all roles':
                    viewRoles();
                    break;
                case 'View all employees':
                    viewEmployees();
                    break;
                case 'Add a department':
                    addDepartment();
                    break;
                case 'Add a role':
                    addRole();
                    break;
                case 'Add an employee':
                    addEmployee();
                    break;
                case 'Update an employee role':
                    updateEmployeeRole();
                    break;
                case 'Exit':
                    console.log('Goodbye!');
                    db.end(); // Close the database connection
                    break;
            }
        });
}

// Function to view departments
function viewDepartments() {
    db.query('SELECT * FROM departments', (err, results) => {
        if (err) throw err;
        console.log('Departments:');
        console.table(results); // Display results in a tabular format
        startApp(); // Return to the main menu
    });
}


// Function to add a department
function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department:',
                validate: (input) => {
                    if (input.trim() === '') {
                        return 'Department name cannot be empty.';
                    }
                    return true;
                },
            },
        ])
        .then((answer) => {
            db.query('INSERT INTO departments (name) VALUES (?)', [answer.name], (err, results) => {
                if (err) throw err;
                console.log('Department added successfully!');
                startApp(); // Return to the main menu
            });
        });
}

// Function to update an employee's role
function updateEmployeeRole() {
    // Inquirer prompts to collect information for the update
    // Then execute the UPDATE SQL statement
}

function viewRoles() {
    db.query('SELECT * FROM roles', (err, results) => {
        if (err) throw err;
        console.log('Roles:');
        console.table(results);
        startApp();
    });
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'first_name',
                message: "Enter the employee's first name:",
            },
            {
                type: 'input',
                name: 'last_name',
                message: "Enter the employee's last name:",
            },
            {
                type: 'input',
                name: 'role_id',
                message: "Enter the employee's role ID:",
            },
            {
                type: 'input',
                name: 'manager_id',
                message: "Enter the employee's manager ID (optional):",
            },
        ])
        .then((answers) => {
            db.query('INSERT INTO employees SET ?', answers, (err, result) => {
                if (err) throw err;
                console.log('Employee added successfully!');
                startApp();
            });
        });
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the role title:',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the role salary:',
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter the department ID for this role:',
            },
        ])
        .then((answers) => {
            db.query('INSERT INTO roles SET ?', answers, (err, result) => {
                if (err) throw err;
                console.log('Role added successfully!');
                startApp();
            });
        });
}

function viewEmployees() {
    db.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        console.log('Employees:');
        console.table(results);
        startApp();
    });
}
