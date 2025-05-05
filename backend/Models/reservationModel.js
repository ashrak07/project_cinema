const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema({
  projection: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projections",
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientEmail: {
    type: String,
  },
  seats: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Reservations", reservationSchema);
