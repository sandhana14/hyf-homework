/*1.Find out how many tasks are in the task table*/
SELECT COUNT(*) FROM task;

/*2.Find out how many tasks in the task table do not have a valid due date*/
SELECT COUNT(*) FROM task
WHERE due_date IS NULL;

/*3.Find all the tasks that are marked as done*/
SELECT t.id,t.title,t.description,t.created,t.updated,t.due_date,t.status_id,t.user_id 
FROM task t JOIN status ON t.status_id = status.id
WHERE status.name = "Done";

/*4.Find all the tasks that are not marked as done*/
SELECT t.id,t.title,t.description,t.created,t.updated,t.due_date,t.status_id,t.user_id 
FROM task t JOIN status ON t.status_id = status.id
WHERE status.name = "In progress" OR status.name = "Not started";

/*5.Get all the tasks, sorted with the most recently created first*/
SELECT * FROM task ORDER BY created DESC;

/*6.Get the single most recently created task*/
SELECT * FROM task 
ORDER BY created DESC
LIMIT 1;

/*7.Get the title and due date of all tasks where the title or description contains database*/
SELECT title,due_date FROM task 
WHERE title LIKE "%da%se%" OR description LIKE "%da%se%";

/*8.Get the title and status (as text) of all tasks*/
SELECT task.title,status.name AS text
FROM task INNER JOIN status ON task.status_id = status.id;

/*9.Get the name of each status, along with a count of how many tasks have that status*/
SELECT status.name, count(*)
FROM status JOIN task ON task.status_id = status.id
GROUP BY status.name;
SELECT * FROM TASK;
SELECT * FROM STATUS;

/*10.Get the names of all statuses, sorted by the status with most tasks first*/
SELECT status.name, count(*)
FROM status JOIN task ON task.status_id = status.id
GROUP BY status.name
ORDER BY count(*) DESC;


