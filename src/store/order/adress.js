import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  city: "",
  cityId: "",
  street: "",
  pointId: "",
  streetNoSpace: "",
  status: "blocked",
};
const adressSlice = createSlice({
  name: "adress",
  initialState,
  reducers: {
    changeStatus(state, action) {
      state.status = action.payload;
    },

    cityChanged(state, action) {
      state.city = action.payload.name;
      state.cityId = action.payload.id;
    },

    streetChanged(state, action) {
      state.street = action.payload.name;
      state.pointId = action.payload.id;
      const streetNoSpace = action.payload.name.replaceAll(" ", "\u00A0");
      state.streetNoSpace = streetNoSpace;
    },
  },
});
export const {
  cityChanged,
  streetChanged,
  changeStatus,
  confirmCity,
  confirmStreet,
} = adressSlice.actions;
export default adressSlice.reducer;
