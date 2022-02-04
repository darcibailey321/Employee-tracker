INSERT INTO department (id, name)
VALUES (1, "Sales"),
        (2, "Engineering"),
        (3, "Finance"), 
        (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Salesperson"),
        (2, "Engineer"),
        (3, "Bookkeeper"), 
        (4, "Attorney");

INSERT INTO employee (id, first_name, last_name, role_id, manager)
VALUES (1, "Darci", "Bailey" 2, 3),
        (2, "Chadd", "Bailey", 3, 4),
        (3, "Daisy", "Duck", 4, 1), 
        (4, "Mickey", "Mouse", 1, 2);