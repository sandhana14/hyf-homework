const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
  try {
    response.send(reservations);
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  try {
    const reservationWithSpecificId = reservations.filter(
      (reservation) => reservation.id === parseInt(request.params.id)
    );
    response.send(reservationWithSpecificId[0]);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
