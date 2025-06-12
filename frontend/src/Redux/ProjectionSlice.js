import { createSlice } from "@reduxjs/toolkit";

export const projectionSlice = createSlice({
  name: "projections",
  initialState: {
    projectionData: [],
    selectedProjection: null,
    existingProjection: false,
  },
  reducers: {
    addProjection: (state, action) => {
      state.projectionData = action.payload;
    },
    addSelectedProjection: (state, action) => {
      state.selectedProjection = action.payload;
      state.existingProjection = true;
    },
  },
});

export const { addProjection, addSelectedProjection } = projectionSlice.actions;

export default projectionSlice.reducer;
