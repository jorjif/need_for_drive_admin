import { configureStore } from "@reduxjs/toolkit";
import carSelectReducer from "./order/carSelect";
import adressReducer from "./order/adress";
import optionsReducer from "./order/options";
import statusReducer from "./order/confirmation";
import accessSlice from "./order/orderAcess";
import priceSlice from "./order/price";
import { databaseApi } from "./order/carStore";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    adress: adressReducer,
    car: carSelectReducer,
    options: optionsReducer,
    status: statusReducer,
    access: accessSlice,
    price: priceSlice,
    [databaseApi.reducerPath]: databaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(databaseApi.middleware),
});

setupListeners(store.dispatch);
export default store;
