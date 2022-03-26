import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataUser, AuthResponse } from "../../../types/responses";

const initialState = {
  dataUser: {} as DataUser | null,
  responseAuth: {} as AuthResponse | null,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setResponseLoginUser: (state, action: PayloadAction<AuthResponse>) => {
      state.responseAuth = action.payload;
    },
    setLogoutUser: (state) => {
      state.responseAuth = null;
      state.dataUser = null;
      state.isAuth = false;
    },
    setDataUser: (state, action: PayloadAction<DataUser>) => {
      state.dataUser = action.payload;
      state.isAuth = true;
    },
    setIsAuthFalse: (state) => {
      state.isAuth = false;
    },
    setIsAuthTrue: (state) => {
      state.isAuth = true;
    },
  },
});

const { reducer, actions } = authSlice;

export const {
  setResponseLoginUser,
  setDataUser,
  setLogoutUser,
  setIsAuthFalse,
  setIsAuthTrue,
} = actions;
export default reducer;
