const connection = require('../config/connection');

module.exports = {

    // 1. View all departments
    viewAllDepartments: function(callback) {
        const query = 'SELECT * FROM department';
        connection.query(query, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 2. View all roles
    viewAllRoles: function(callback) {
        const query = 'SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department ON role.department_id = department.id';
        connection.query(query, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 3. View all employees
    viewAllEmployees: function(callback) {
        const query = `
            SELECT 
                e1.id, e1.first_name, e1.last_name, 
                role.title, department.name AS department, 
                role.salary, CONCAT(e2.first_name, ' ', e2.last_name) AS manager
            FROM employee e1
            LEFT JOIN role ON e1.role_id = role.id
            LEFT JOIN department ON role.department_id = department.id
            LEFT JOIN employee e2 ON e1.manager_id = e2.id
        `;
        connection.query(query, function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 4. Add a department
    addDepartment: function(departmentName, callback) {
        const query = 'INSERT INTO department (name) VALUES (?)';
        connection.query(query, [departmentName], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 5. Add a role
    addRole: function(roleTitle, roleSalary, departmentId, callback) {
        const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
        connection.query(query, [roleTitle, roleSalary, departmentId], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 6. Add an employee
    addEmployee: function(firstName, lastName, roleId, managerId, callback) {
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [firstName, lastName, roleId, managerId], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    },

    // 7. Update an employee's role
    updateEmployeeRole: function(employeeId, newRoleId, callback) {
        const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
        connection.query(query, [newRoleId, employeeId], function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }

    // Additional functions for other CRUD operations and bonus features can be added as needed.
};
