USE employees_db;

INSERT INTO departments (depName)
VALUES ("Sales"),
        ("Engineering"),
        ("Finance"), 
        ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 75000, 4),
        ("Engineer", 100000, 3),
        ("Bookkeeper", 50000, 2), 
        ("Attorney", 150000, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Minnie", "Mouse", 2, null),
        ("Goofy", "Pluto", 3, null),
        ("Daisy", "Duck", 4, null), 
        ("Mickey", "Mouse", 1, null);