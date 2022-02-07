DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department(
  id INT PRIMARY KEY NOT NULL,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role(
  id INT PRIMARY KEY NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id),
  REFERENCES department(id),
);

CREATE TABLE employee(
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manageer_id INT,
  ON DELETE SET NULL,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id),
);