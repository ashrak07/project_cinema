const express = require("express");
const {
  createProjection,
  deleteProjectionById,
  getProjectionById,
  getAllProjection,
} = require("../Controllers/projectionController");

const router = express.Router();

router.post("/projection/", createProjection);

router.delete("/projection/:id", deleteProjectionById);

router.get("/projection/:id", getProjectionById);

router.get("/projection/", getAllProjection);

module.exports = router;
