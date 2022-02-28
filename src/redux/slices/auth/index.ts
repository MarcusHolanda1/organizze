import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataUser, AuthResponse } from "../../../types/responses";

const initialState = {
  dataUser: {} as DataUser,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setDataUser: (state, action: PayloadAction<DataUser | AuthResponse>) => {
      state.dataUser = {
        ...state.dataUser,
        ...action.payload,
      };
      state.isAuth = true;
    },
  },
});

const { reducer, actions } = authSlice;

export const { setDataUser } = actions;
export default reducer;
