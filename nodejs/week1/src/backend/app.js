const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

const mealsWithReviews = meals.map((mealsData) => {
  mealsData.reviews = [];
  reviews.filter((reviewsData) => {
    if (mealsData.id === reviewsData.mealId) {
      mealsData.reviews.push(reviewsData);
    }
  });
  return mealsData;
});

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

app.get("/meals", async (request, response) => {
  response.json(mealsWithReviews);
});

app.get("/cheap-meals", async (request, response) => {
  response.json(mealsWithReviews.filter((mealsData) => mealsData.price < 70));
});

app.get("/large-meals", async (request, response) => {
  response.json(
    mealsWithReviews.filter((mealsData) => mealsData.maxNumberOfGuests > 16)
  );
});

app.get("/meal", async (request, response) => {
  const randomMeal = Math.floor(Math.random() * mealsWithReviews.length);
  response.json(mealsWithReviews[randomMeal]);
});

app.get("/reservations", async (request, response) => {
  response.json(reservations);
});

app.get("/reservation", async (request, response) => {
  const randomReservation = Math.floor(Math.random() * reservations.length);
  response.json(reservations[randomReservation]);
});

module.exports = app;
