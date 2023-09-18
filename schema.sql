-- Drop the database if it exists
DROP DATABASE IF EXISTS employeeManager_db;
-- Create a new database
CREATE DATABASE employeeManager_db;
-- Switch to the new database
USE employeeManager_db;

-- Create departments table
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Create employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

-- Create roles table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);