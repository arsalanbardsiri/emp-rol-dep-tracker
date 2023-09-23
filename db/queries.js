const connection = require('./connection');

// Fetch all departments from the "department" table.
const getDepartments = async () => {
  const [rows] = await connection.query('SELECT * FROM department');
  return rows;
};

// Fetch all roles from the "role" table.
const getRoles = async () => {
  const [rows] = await connection.query('SELECT * FROM role');
  return rows;
};

// Fetch all employees from the "employee" table.
const getEmployees = async () => {
  const [rows] = await connection.query('SELECT * FROM employee');
  return rows;
};

// Add a new department to the "department" table.
const addDepartment = async (name) => {
  const [result] = await connection.query('INSERT INTO department (name) VALUES (?)', [name]);
  return result;
};

// Add a new role to the "role" table.
const addRole = async (title, salary, department_id) => {
  const [result] = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, department_id]);
  return result;
};

// Add a new employee to the "employee" table.
const addEmployee = async (first_name, last_name, role_id, manager_id) => {
  const [result] = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [first_name, last_name, role_id, manager_id]);
  return result;
};

// Update an employee's role in the "employee" table.
const updateEmployeeRole = async (employee_id, role_id) => {
  const [result] = await connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]);
  return result;
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
