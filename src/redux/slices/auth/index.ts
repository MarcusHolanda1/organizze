import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataUser, AuthResponse } from "../../../types/responses";

const initialState = {
  dataUser: {} as DataUser,
  responseAuth: {} as AuthResponse,
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setResponseLoginUser: (state, action: PayloadAction<AuthResponse>) => {
      state.responseAuth = action.payload;
    },
    setDataUser: (state, action: PayloadAction<DataUser>) => {
      state.dataUser = action.payload;
      state.isAuth = true;
    },
  },
});

const { reducer, actions } = authSlice;

export const { setResponseLoginUser, setDataUser } = actions;
export default reducer;
