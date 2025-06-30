import { createSlice } from "@reduxjs/toolkit";

export const projectionSlice = createSlice({
  name: "projections",
  initialState: {
    projectionData: [],
    selectedProjection: null,
    existingProjection: false,
    selectedId: localStorage.getItem("selectedId") || null,
  },
  reducers: {
    addProjection: (state, action) => {
      state.projectionData = action.payload;
    },
    addSelectedProjection: (state, action) => {
      state.selectedProjection = action.payload;
      state.existingProjection = true;
    },
    addSelectedId: (state, action) => {
      state.selectedId = action.payload;
      localStorage.setItem("selectedId", state.selectedId);
    },
  },
});

export const { addProjection, addSelectedProjection, addSelectedId } =
  projectionSlice.actions;

export default projectionSlice.reducer;
