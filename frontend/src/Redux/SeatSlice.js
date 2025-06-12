import { createSlice } from "@reduxjs/toolkit";

export const seatSlice = createSlice({
  name: "seats",
  initialState: {
    selectedSeats: [],
    takenSeats: [],
  },
  reducers: {
    addSeat: (state, action) => {
      if (!state.selectedSeats.includes(action.payload)) {
        state.selectedSeats.push(action.payload);
      }
    },
    addTakenSeats: (state, action) => {
      state.takenSeats = action.payload;
    },
    removeSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(
        (seat) => seat !== action.payload
      );
    },
    toggleSeat: (state, action) => {
      if (state.selectedSeats.includes(action.payload)) {
        state.selectedSeats = state.selectedSeats.filter(
          (seat) => seat !== action.payload
        );
      } else {
        state.selectedSeats.push(action.payload);
      }
    },
    clearSeats: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { addSeat, addTakenSeats, removeSeat, toggleSeat, clearSeats } =
  seatSlice.actions;

export default seatSlice.reducer;
