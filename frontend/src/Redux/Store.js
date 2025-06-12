import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "../Redux/SeatSlice";
import movieReducer from "../Redux/MovieSlice";
import projectionReducer from "../Redux/ProjectionSlice";

export const store = configureStore({
  reducer: {
    seats: seatReducer,
    movies: movieReducer,
    projections: projectionReducer,
  },
});
