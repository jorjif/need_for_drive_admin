import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startPrice: 0,
  maxPrice: 0,
};
const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setStartPrice(state, action) {
      state.startPrice = Number(action.payload);
    },
    setMaxPrice(state, action) {
      state.maxPrice = Number(action.payload);
    },
    addPrice(state, action) {
      state.startPrice += Number(action.payload);
    },
  },
});

export const { setMaxPrice, setStartPrice, addPrice } = priceSlice.actions;
export default priceSlice.reducer;
