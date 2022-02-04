INSERT INTO department (id, name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"), 
        (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Salesperson", 75,000, 4),
        (2, "Engineer", 100,000, 3),
        (3, "Bookkeeper", 50,000, 2), 
        (4, "Attorney", 150,000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Minnie", "Mouse" 2, 3),
        (2, "Goofy", "Pluto", 3, null),
        (3, "Daisy", "Duck", 4, 1), 
        (4, "Mickey", "Mouse", 1, null);