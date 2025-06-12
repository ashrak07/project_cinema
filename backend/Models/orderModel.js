const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
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
  },
  clientEmail: {
    type: String,
  },
  seats: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
