const asyncHandler = require("express-async-handler");
const Projections = require("../Models/projectionModel");

const createProjection = asyncHandler(async (req, res) => {
  try {
    const { movie, room, startTime, language, subtitle } = req.body;

    const projection = new Projections({
      movie,
      room,
      startTime,
      language,
      subtitle,
    });
    await projection.save();
    res.status(200).json({
      message: "projection created",
      data: projection,
    });
  } catch (error) {
    console.error(error);
  }
});

const deleteProjectionById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await Projections.deleteOne({ _id: id });
    const remainingProjection = await Projections.find();
    res.status(200).json({
      message: "projection list",
      data: remainingProjection,
      count: remainingProjection.length,
    });
  } catch (error) {
    console.error(error);
  }
});

const getAllProjection = asyncHandler(async (req, res) => {
  try {
    const projection = await Projections.find();
    res.status(200).json({
      message: "projection list",
      data: projection,
    });
  } catch (error) {
    console.error(error);
  }
});

const getProjectionById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const projection = await Projections.findById({ _id: id });
    res.status(200).json({
      data: projection,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createProjection,
  getAllProjection,
  getProjectionById,
  deleteProjectionById,
};
