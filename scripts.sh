-- Insertar datos en la tabla User
INSERT INTO user (name) VALUES ('Usuario 1');
INSERT INTO user (name) VALUES ('Usuario 2');
INSERT INTO user (name) VALUES ('Usuario 3');

-- Insertar datos en la tabla Task
INSERT INTO task (title) VALUES ('Tarea 1');
INSERT INTO task (title) VALUES ('Tarea 2');
INSERT INTO task (title) VALUES ('Tarea 3');

-- Insertar datos en la tabla intermedia tasks_users
-- Asociar Usuario 1 con Tarea 1
INSERT INTO tasks_users (user_id, task_id) VALUES (1, 1);

-- Asociar Usuario 2 con Tarea 1 y Tarea 2
INSERT INTO tasks_users (user_id, task_id) VALUES (2, 1);
INSERT INTO tasks_users (user_id, task_id) VALUES (2, 2);

-- Asociar Usuario 3 con Tarea 2 y Tarea 3
INSERT INTO tasks_users (user_id, task_id) VALUES (3, 2);
INSERT INTO tasks_users (user_id, task_id) VALUES (3, 3);
