const express = require("express");
const { generateTicket } = require("../Controllers/ticketController");

const router = express.Router();

router.post("/generate/:id", generateTicket);

module.exports = router;
