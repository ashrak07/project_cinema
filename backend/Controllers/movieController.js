const Movies = require("../Models/movieModel");
const asyncHandler = require("express-async-handler");

const createMovie = asyncHandler(async (req, res) => {
  try {
    console.log("--invoking create movie--");

    const { title, priceUnit, synopsis } = req.body;
    console.log("request : ", req.body);
    const coverUrl = `uploads/${req.file.filename}`;

    const movie = new Movies({
      title,
      priceUnit,
      synopsis,
      cover: coverUrl,
    });
    await movie.save();
    res.status(200).json({
      message: "movies added",
      data: movie,
    });
  } catch (error) {
    console.error(error);
  }
});

const getAllMovies = asyncHandler(async (req, res) => {
  console.log("-- invoking getAllMovies --");
  const movie = await Movies.find().lean();
  console.log(movie);
  res.status(200).json({
    message: "list movies",
    data: movie,
    count: movie.length,
  });
});

const getMovieById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await Movies.findById(id);
  res.status(200).json({ data: movie });
});

const deleteMovieById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const movie = await Movies.deleteOne({ _id: id });

  const remainingMovie = await Movies.find();
  res.status(200).json({
    message: "list movies",
    data: remainingMovie,
    count: remainingMovie.length,
  });
});

const updateMovie = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const { title, priceUnit, synopsis } = req.body;

    const existingMovie = await Movies.findById(id);
    if (!existingMovie) {
      res.status(400).json({ error: "Movie not found" });
    }
    console.log("existing movie ==>", existingMovie);
    let updatedCover = existingMovie.cover;
    if (req.file) {
      updatedCover = `uploads/${req.file.filename}`;
    }

    const updatedMovie = await Movies.findByIdAndUpdate(
      id,
      {
        title,
        priceUnit,
        synopsis,
        cover: updatedCover,
      },
      { new: true, runValidators: true }
    );
    console.log("updated movie ==> ", updatedMovie);
    res.status(200).json({
      message: "Movie updated successfully",
      data: updatedMovie,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  deleteMovieById,
  updateMovie,
};
