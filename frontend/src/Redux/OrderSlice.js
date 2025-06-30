import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderData: null,
    orderId: null,
  },
  reducers: {
    addOrderData: (state, action) => {
      state.orderData = action.payload;
    },
    addOrderId: (state, action) => {
      state.orderId = action.payload;
    },
    deleteOrderData: (state, action) => {
      state.orderData = null;
      state.orderId = null;
    },
  },
});

export const { addOrderData, addOrderId, deleteOrderData } = orderSlice.actions;

export default orderSlice.reducer;
