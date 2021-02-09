const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
  try {
    response.send(reviews);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reviewWithSpecificId = reviews.filter(
      (review) => review.id === parseInt(request.params.id)
    );
    response.send(reviewWithSpecificId[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
