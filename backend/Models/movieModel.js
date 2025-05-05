const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  synopsis: {
    type: String,
    required: true,
  },
  priceUnit: {
    type: Number,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movies", movieSchema);
