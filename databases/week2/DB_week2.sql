-- Part 1: Working with tasks
-- Add a task
INSERT INTO task VALUES (36,"Do MYSQL HYF exercises","Read the exercises and resolve it","2018-10-10 10:30:05","2018-10-09 10:30:05","2018-10-20 11:30:05",1,6);
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES ("Do homework","finish the exercises","2019-10-10 10:30:05","2019-10-09 10:30:05","2019-10-20 11:30:05",1,6);
-- Change the title of a task
ALTER TABLE task RENAME COLUMN title TO task_title;
UPDATE task set task_title = "Play music"  WHERE id=11;
-- Change a task due date
UPDATE task set due_date = "2017-11-20 23:58:03" WHERE id=2;
-- Change a task status
UPDATE task set status_id = 3 WHERE id=1;
-- Mark a task as complete
UPDATE task set status_id = 3 WHERE task_title="Charge electric bicycle" AND id=22;
-- Delete a task
DELETE FROM task where id=22;

-- Part 2: School database
-- Creating class table
CREATE TABLE class(id INT PRIMARY KEY,name VARCHAR(50),begins DATE,ends DATE);
-- Creating student table
CREATE TABLE student(id INT PRIMARY KEY,name VARCHAR(50),email VARCHAR(320),phone VARCHAR(255),
class_id INT,FOREIGN KEY (class_id) REFERENCES class(id));
-- Create an index on the name column of the student table.
CREATE INDEX idx_name ON student (name);
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE class ADD status ENUM("not-started", "ongoing", "finished");

-- Part 3: More queries
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.* FROM task 
JOIN user_task ON task.id=user_task.task_id
JOIN user ON user.id= user_task.user_id
WHERE user.email LIKE "%@spotify.com";

-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.* FROM task 
JOIN user_task ON task.id=user_task.task_id
JOIN user ON user.id= user_task.user_id
JOIN status ON task.status_id = status.id
WHERE user.name = "Donald Duck" AND status.name = "Not started";

-- Get all the tasks for 'Maryrose Meadows' that were created in september
SELECT task.* FROM task 
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.name = "Maryrose Meadows" AND MONTH(created) = 09;

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, 
-- how many tasks were created in november, etc.
SELECT  count(*) AS "specific_month_tasks",MONTHNAME(created) AS "month" from task
GROUP BY MONTH(created);

-- Part 4: Creating a database and entity relationship diagram
CREATE TABLE employees(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       first_name VARCHAR(255) NOT NULL,
                       last_name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) NOT NULL,
                       phone_number VARCHAR(255) NULL);
                       
CREATE TABLE projects(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                       project_name VARCHAR(255) NOT NULL,
                       start_date DATE NULL,
                       due_date DATE NULL);
                       
CREATE TABLE employees_projects(id INT NOT NULL AUTO_INCREMENT,
                                employee_id INT NOT NULL,
                                project_id INT NOT NULL,
                                FOREIGN KEY (employee_id) REFERENCES employees(id) ON DELETE CASCADE,
                                FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
                                PRIMARY KEY (id));














