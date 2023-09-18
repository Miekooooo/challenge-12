-- Insert data into the departments table
INSERT INTO departments (name) VALUES
    ('HR'),
    ('Engineering'),
    ('Marketing');

-- Insert data into the roles table
INSERT INTO roles (title, salary, department_id) VALUES
    ('HR Manager', 70000, 1),
    ('Software Engineer', 80000, 2),
    ('Marketing Coordinator', 55000, 3);

-- Insert data into the employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ('John', 'Doe', 1, NULL),   -- HR Manager, no manager
    ('Alice', 'Smith', 2, 1),  -- Software Engineer, managed by John Doe
    ('Bob', 'Johnson', 3, NULL);  -- Marketing Coordinator, no manager

SELECT * FROM departments;
SELECT * FROM roles;
SELECT * FROM employees;