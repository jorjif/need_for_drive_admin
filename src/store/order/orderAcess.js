import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  access: false,
};
//данный редусер необходим для проверки - можно ли пользователю переходить на следующий шаг или нет
const accessSlice = createSlice({
  name: "access",
  initialState,
  reducers: {
    userAccess(state, action) {
      state.access = action.payload;
    },
  },
});

export const { userAccess } = accessSlice.actions;
export default accessSlice.reducer;
