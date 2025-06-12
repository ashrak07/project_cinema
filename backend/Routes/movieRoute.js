const express = require("express");
const upload = require("../Config/multer");
const {
  createMovie,
  updateMovie,
  getMovieById,
  deleteMovieById,
  getAllMovies,
} = require("../Controllers/movieController");

const router = express.Router();

router.post("/movie/", upload.single("cover"), createMovie);

router.put("/movie/update/:id", updateMovie);

router.get("/movie/:id", getMovieById);

router.delete("/movie/:id", deleteMovieById);

router.get("/movie/", getAllMovies);

module.exports = router;
