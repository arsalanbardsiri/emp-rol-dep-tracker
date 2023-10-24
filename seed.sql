-- Create department table
CREATE TABLE department (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

-- Create role table
CREATE TABLE role (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create employee table
CREATE TABLE employee (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert sample departments
INSERT INTO department (name) VALUES ('Sales'), ('Engineering'), ('HR'), ('Finance'), ('Marketing');

-- Insert sample roles
INSERT INTO role (title, salary, department_id) VALUES 
('Engineer', 60000, 2), 
('Salesperson', 50000, 1), 
('HR Manager', 55000, 3),
('Financial Analyst', 58000, 4),
('Marketing Specialist', 52000, 5);

-- Insert sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL), 
('Jane', 'Smith', 2, 1),
('Alice', 'Johnson', 3, 1),
('Bob', 'Brown', 4, NULL),
('Charlie', 'Davis', 5, 2),
('Eve', 'White', 3, 1);
