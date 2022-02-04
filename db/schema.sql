DROP DATABASE IF EXISTS _bd;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE department(
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
);

CREATE TABLE role(
  id INT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  FOREIGN KEY (customer_id)
  REFERENCES department(id)
);

CREATE TABLE employee(
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manageer_id INT
    NULL
);