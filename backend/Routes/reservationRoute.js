const express = require("express");
const {
  createReservation,
  deleteReservationById,
  getAllReservation,
  getReservationById,
} = require("../Controllers/reservationController");

const router = express.Router();

router.post("/reservation/", createReservation);

router.delete("/reservation/:id", deleteReservationById);

router.get("/reservation/all", getAllReservation);

router.get("/reservation/:id", getReservationById);

module.exports = router;
