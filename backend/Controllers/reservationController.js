const asyncHandler = require("express-async-handler");
const Reservations = require("../Models/reservationModel");

const createReservation = asyncHandler(async (req, res) => {
  try {
    const { projection, client, clientName, clientEmail, seats, createdAt } =
      req.body;

    const reservation = new Reservations({
      projection,
      client,
      clientName,
      clientEmail,
      seats,
      createdAt,
    });
    await reservation.save();
    res.status(200).json({
      message: "reservation created successfully",
      data: reservation,
    });
  } catch (error) {
    console.error(error);
  }
});

const getAllReservation = asyncHandler(async (req, res) => {
  try {
    const reservation = await Reservations.find();
    res.status(200).json({
      message: "reservation list",
      data: reservation,
      count: reservation.length,
    });
  } catch (error) {
    console.error(error);
  }
});

const getReservationById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const reservation = await Reservations.findById({ _id: id });
    res.status(200).json({
      data: reservation,
    });
  } catch (error) {
    console.error(error);
  }
});

const deleteReservationById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await Reservations.deleteOne({ _id: id });

    const remainingReservation = await Reservations.find();
    res.status(200).json({
      message: "reservation list",
      data: remainingReservation,
      count: remainingReservation.length,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createReservation,
  getAllReservation,
  getReservationById,
  deleteReservationById,
};
