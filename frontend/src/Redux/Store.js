import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "../Redux/SeatSlice";
import movieReducer from "../Redux/MovieSlice";
import projectionReducer from "../Redux/ProjectionSlice";
import userReducer from "../Redux/UserSlice";
import orderReducer from "../Redux/OrderSlice";

export const store = configureStore({
  reducer: {
    seats: seatReducer,
    movies: movieReducer,
    projections: projectionReducer,
    users: userReducer,
    orders: orderReducer,
  },
});
