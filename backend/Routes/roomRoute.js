const express = require("express");
const { createRoom, deleteRoomById } = require("../Controllers/roomController");

const router = express.Router();

router.post("/room/create", createRoom);

router.delete("/room/:id", deleteRoomById);

module.exports = router;
