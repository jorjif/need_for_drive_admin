import { createSlice } from "@reduxjs/toolkit";

const dateFrom = new Date().getTime();
const dateTo = new Date().getTime();
const initialState = {
  color: "",
  date: {
    from: dateFrom,
    to: dateTo,
    difference: "",
  },
  tariff: "Поминутно",
  tariffId: "",
  isFullTank: {
    status: false,
    ruName: "Полный бак",
    price: 500,
  },
  isNeedChildChair: {
    status: false,
    ruName: "Детское кресло",
    price: 200,
  },
  isRightWheel: {
    status: false,
    ruName: "Правый руль",
    price: 1600,
  },

  status: "blocked",
};
const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeColor(store, action) {
      store.color = action.payload;
    },

    changeStartDate({ date }, action) {
      date.from = action.payload;
    },

    changeEndDate({ date }, action) {
      date.to = action.payload;
    },

    changeDateDifference(store, action) {
      store.date.difference = action.payload;
    },

    changeTariff(store, action) {
      store.tariff = action.payload;
    },
    changeTariffId(store, action) {
      store.tariffId = action.payload;
    },

    setOption(store, action) {
      if (action.payload === "fullTank") {
        store.isFullTank.status = !store.isFullTank.status;
      }
      if (action.payload === "needChildChair") {
        store.isNeedChildChair.status = !store.isNeedChildChair.status;
      }
      if (action.payload === "rightWheel") {
        store.isRightWheel.status = !store.isRightWheel.status;
      }
    },

    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const {
  changeStartDate,
  changeEndDate,
  changeStatus,
  changeColor,
  changeDateDifference,
  changeTariff,
  changeTariffId,
  addOption,
  removeOption,
  setOption,
} = optionsSlice.actions;
export default optionsSlice.reducer;
