-- Creating table meal
CREATE TABLE meal(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
				  title VARCHAR(255),
				 description TEXT,
                 location VARCHAR(255),
                 `when` DATETIME,
                 max_reservations INT,
                 price DECIMAL,
                 created_date DATE);
-- Creating table Reservation
CREATE TABLE reservation(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
						 number_of_guests INT,
                         meal_id INT NOT NULL,
                         created_date DATE,
                         contact_phonenumber VARCHAR(30),
                         contact_name VARCHAR(255),
                         contact_email VARCHAR(255),
                         FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE);
-- Creating table review
CREATE TABLE review(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
				    title VARCHAR(255),
                    description TEXT,
                    meal_id INT NOT NULL,
                    stars INT,
                    created_date DATE,
                    FOREIGN KEY (meal_id) REFERENCES meal(id) ON DELETE CASCADE);
-- Inserting values into the meal table
INSERT INTO meal VALUES(1,"Chicken briyani","Made up of rice and chicken","Copenhagen","2021-01-27 13:00:00",20,100,"2020-12-10");
INSERT INTO meal VALUES(2,"Spicy dal","Dal with spices","Copenhagen","2021-01-27 11:00:00",15,80,"2020-12-19");
INSERT INTO meal VALUES(3,"Best ever cheese grits","Made up of cheddar cheese and chicken broth","Copenhagen","2021-01-28 13:15:00",25,150,"2021-01-10");
INSERT INTO meal VALUES(4,"Vegan black bean soup","Black beans with veggies","Copenhagen","2021-01-28 10:00:00",10,90,"2021-01-10");
INSERT INTO meal VALUES(5,"Pizza Oatmeal","Oats with pizza sauce","Copenhagen","2021-01-29 14:30:00",5,50,"2021-01-11");
INSERT INTO meal VALUES(6,"Tandoori chicken","Whole chicken with spices","Copenhagen","2021-01-29 12:45:00",25,200,"2021-01-15");
INSERT INTO meal VALUES(7,"Malai kofta","vegetable meatballs in a thick sauce","Copenhagen","2021-01-30 18:00:00",16,	250,"2020-12-23");
INSERT INTO meal VALUES(8,"Chicpeas curry","Whole peas with curry masala ","Copenhagen","2021-01-30 20:30:00",20,110,"2020-12-29");
INSERT INTO meal VALUES(9,"Dosa with chutney","coconut chutney with two dosas","Copenhagen","2021-01-31 13:00:00",10,130,"2021-01-19");
INSERT INTO meal VALUES(10,"White pasta","Pasta with cheese","Copenhagen","2021-02-01 20:00:00",10,150,"2021-01-20");
	
-- Inserting values into the reservation table
INSERT INTO reservation(number_of_guests,meal_id,created_date,contact_phonenumber,contact_name,contact_email) 
VALUES(4,2,"2021-01-26","12345678","Sandhana","sand@hyf.com"),
	(10,1,"2021-01-26","98764689","Rajani","raj@hyf.com"),
    (8,6,"2021-01-25","87654897","Jyothi","jyo@hyf.com"),
    (5,6,"2021-01-26","77665677","Tithi","tithi@hyf.com"),
    (15,7,"2021-01-27","23978769","Charmi","charmi@hyf.com");

-- Inserting values into the review table
INSERT INTO review VALUES(1,"Spicy dal is good","It has a good aroma but little too spicy",2,8,"2021-01-27"),
						(2,"Chicken briyani is excellent","It tastes really good with its own authenticity",1,10,"2021-01-27"),
                        (3,"Tandoori chicken is not very good","It is hald cooked and too spicy",6,5,"2021-01-29");

-- Meal
-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO meal VALUES(11,"Maggi","Noodles with maggi masala and veggies","Copenhagen","2021-02-02 14:00:00",5,95,"2021-01-20");
-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 3;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET description="Black beans with veggies,rice and chips" WHERE id = 4;
-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 8;

-- Reservation
-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO reservation VALUES(6,5,9,"2021-01-30",23345566,"Dlnya","dlnya@hyf.com");
-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 2;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET number_of_guests = 7 WHERE id = 6;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 7;

-- Review
-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO review VALUES(4,"Malai kofta is superb","It smells nice and great taste",7,9,"2021-01-30");
INSERT INTO review VALUES(5,"Tandoori chicken is ok","It is too spicy",6,5,"2021-01-29");
-- Get a review with any id, fx 1
SELECT * FROM review WHERE id = 3;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET stars = 4 WHERE id = 3;
-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 4;

-- Functionality
-- Get meals that has a price smaller than a specific price fx 90
SELECT * from meal WHERE price < 100;
-- Get meals that still has available reservations
SELECT * FROM meal WHERE id NOT IN (SELECT meal_id FROM RESERVATION);
select * from reservation;
SELECT meal.* , max_reservations-sum(number_of_guests) AS available_space FROM meal 
JOIN reservation ON meal.id = reservation.meal_id
GROUP BY meal_id
HAVING max_reservations> sum(number_of_guests);
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE "%chicken%";
-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date > "2021-01-10" AND created_date < "2021-01-17";
-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;
-- Get the meals that have good reviews
SELECT meal.* from meal JOIN review ON meal.id = review.meal_id
WHERE review.stars >= 8;
-- Get reservations for a specific meal sorted by created_date
SELECT meal.title,reservation.* FROM meal 
JOIN reservation ON meal.id=reservation.meal_id 
WHERE meal.title LIKE "%chicken" 
ORDER BY reservation.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT meal.*,AVG(review.stars) AS average_stars FROM meal JOIN review
ON meal.id = review.meal_id
GROUP BY meal_id
ORDER BY AVG(review.stars) DESC;
