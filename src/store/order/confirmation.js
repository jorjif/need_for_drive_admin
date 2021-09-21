import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupOpen: false,
  orderConfirmed: false,
  stateShouldLoad: true,
  status: "blocked",
};

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState,
  reducers: {
    changeStatus(store, action) {
      store.status = action.payload;
    },

    popupCloseOpen(store, action) {
      store.popupOpen = action.payload;
    },

    confirmOrder(store, action) {
      store.orderConfirmed = action.payload;
    },
    shouldStateLoad(store, action) {
      store.stateShouldLoad = action.payload;
    },
  },
});
export const { popupCloseOpen, confirmOrder, changeStatus, shouldStateLoad } =
  confirmationSlice.actions;
export default confirmationSlice.reducer;
