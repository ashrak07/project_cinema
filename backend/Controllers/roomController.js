const asyncHandler = require("express-async-handler");
const Rooms = require("../Models/roomModel");

const createRoom = asyncHandler(async (req, res) => {
  try {
    const { name, capacity } = req.body;
    const room = new Rooms({
      name,
      capacity,
    });
    await room.save();
    res.status(200).json({ room });
  } catch (error) {
    console.error(error);
  }
});

const deleteRoomById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  await Rooms.deleteOne({ _id: id });

  const remainingRoom = await Rooms.find();
  res.status(200).json({
    message: "room list",
    data: remainingRoom,
    count: remainingRoom.length,
  });
});

module.exports = { createRoom, deleteRoomById };
