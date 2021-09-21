import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carModel: "",
  carImg: "",
  id: "",
  colors: [],
  plate: "",
  status: "blocked",
};
const carSelect = createSlice({
  name: "carSelect",
  initialState,
  reducers: {
    selectCar(state, action) {
      const { carImg, carModel, id, plate, colors, fuel } = action.payload;
      return {
        carModel,
        carImg,
        id,
        status: state.status,
        plate,
        colors,
        fuel,
      };
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { selectCar, changeStatus } = carSelect.actions;
export default carSelect.reducer;
