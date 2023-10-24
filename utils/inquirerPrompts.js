const inquirer = require('inquirer');
const queries = require('../models/queries');

const mainMenu = async () => {
    const { choice } = await inquirer.prompt({
        name: 'choice',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add a Department',
            'Add a Role',
            'Add an Employee',
            'Update an Employee Role',
            'Exit'
        ]
    });

    switch (choice) {
        case 'View All Departments':
            queries.viewAllDepartments(function(data) {
                console.table(data);
                mainMenu();
            });
            break;

        case 'View All Roles':
            queries.viewAllRoles(function(data) {
                console.table(data);
                mainMenu();
            });
            break;

        case 'View All Employees':
            queries.viewAllEmployees(function(data) {
                console.table(data);
                mainMenu();
            });
            break;

        case 'Add a Department':
            const { departmentName } = await inquirer.prompt({
                name: 'departmentName',
                type: 'input',
                message: 'What is the name of the department?'
            });
            queries.addDepartment(departmentName, function() {
                console.log('Department added successfully!');
                mainMenu();
            });
            break;

        case 'Add a Role':
            // Note: For simplicity, we're directly prompting for the department_id. In a real-world scenario, you'd first list departments for the user to choose from.
            const { roleTitle, roleSalary, departmentId } = await inquirer.prompt([
                {
                    name: 'roleTitle',
                    type: 'input',
                    message: 'What is the title of the role?'
                },
                {
                    name: 'roleSalary',
                    type: 'input',
                    message: 'What is the salary of the role?'
                },
                {
                    name: 'departmentId',
                    type: 'input',
                    message: 'What is the department ID for this role?'
                }
            ]);
            queries.addRole(roleTitle, roleSalary, departmentId, function() {
                console.log('Role added successfully!');
                mainMenu();
            });
            break;

        case 'Add an Employee':
            // Note: Similar to the addRole prompt, we're directly prompting for role_id and manager_id. In a real-world scenario, you'd provide lists to choose from.
            const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
                {
                    name: 'firstName',
                    type: 'input',
                    message: 'What is the employee\'s first name?'
                },
                {
                    name: 'lastName',
                    type: 'input',
                    message: 'What is the employee\'s last name?'
                },
                {
                    name: 'roleId',
                    type: 'input',
                    message: 'What is the role ID for this employee?'
                },
                {
                    name: 'managerId',
                    type: 'input',
                    message: 'What is the manager ID for this employee? (Leave empty if no manager)',
                    default: null
                }
            ]);
            queries.addEmployee(firstName, lastName, roleId, managerId, function() {
                console.log('Employee added successfully!');
                mainMenu();
            });
            break;

        case 'Update an Employee Role':
            // Note: For simplicity, we're directly prompting for employee_id and newRole_id. In a real-world scenario, you'd provide lists of employees and roles to choose from.
            const { employeeId, newRoleId } = await inquirer.prompt([
                {
                    name: 'employeeId',
                    type: 'input',
                    message: 'Which employee\'s role do you want to update? (Enter employee ID)'
                },
                {
                    name: 'newRoleId',
                    type: 'input',
                    message: 'What is the new role ID for this employee?'
                }
            ]);
            queries.updateEmployeeRole(employeeId, newRoleId, function() {
                console.log('Employee\'s role updated successfully!');
                mainMenu();
            });
            break;

        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
    }
};

module.exports = { mainMenu };
