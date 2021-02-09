const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    if (Object.keys(request.query).length === 0) {
      response.send(meals);
    } else if (request.query.hasOwnProperty("maxPrice")) {
      if (
        isNaN(parseInt(request.query.maxPrice)) ||
        parseInt(request.query.maxPrice) < 0
      ) {
        response.status(400).send();
      } else {
        const maxPrice = parseInt(request.query.maxPrice);
        const mealsUnderMaxPrice = meals.filter(
          (meal) => meal.price < maxPrice
        );
        response.send(mealsUnderMaxPrice);
      }
    } else if (request.query.hasOwnProperty("title")) {
      const title = request.query.title;
      const rgxp = new RegExp(title, "i");
      const mealsWithMatchingTitle = meals.filter((meal) =>
        rgxp.test(meal.title)
      );
      response.send(mealsWithMatchingTitle);
    } else if (request.query.hasOwnProperty("createdAfter")) {
      if (isNaN(Date.parse(request.query.createdAfter))) {
        response.status(400).send();
      } else {
        const mealsAfterGivenDate = meals.filter(
          (meal) =>
            Date.parse(meal.createdAt) > Date.parse(request.query.createdAfter)
        );
        response.send(mealsAfterGivenDate);
      }
    } else if (request.query.hasOwnProperty("limit")) {
      if (
        isNaN(parseInt(request.query.limit)) ||
        parseInt(request.query.limit) < 0
      ) {
        response.status(400).send();
      } else {
        const limit = parseInt(request.query.limit);
        const limitedMeals = meals.slice(0, limit);
        response.send(limitedMeals);
      }
    } else {
      response.status(400).send();
    }
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    if (isNaN(parseInt(request.params.id)) || parseInt(request.params.id) < 0) {
      response.status(400).send();
    } else {
      const mealsWithIdExists = meals.map((meal) => meal.id);
      if (mealsWithIdExists.includes(parseInt(request.params.id))) {
        const mealWithSpecificId = meals.filter(
          (meal) => meal.id === parseInt(request.params.id)
        );
        response.send(mealWithSpecificId[0]);
      } else {
        response.send("Id which you are looking for is not exists");
      }
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
