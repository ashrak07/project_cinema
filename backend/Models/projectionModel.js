const mongoose = require("mongoose");

const projectionSchema = mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movies",
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rooms",
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  language: {
    type: String,
    default: "VF",
  },
  subtitle: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Projections", projectionSchema);
