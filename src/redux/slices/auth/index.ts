import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataUser } from "../../../types/responses";

const initialState = {
  dataUser: {} as DataUser | null,
  authenticated: false,
  showHome: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (
      state: { authenticated: boolean },
      action: { payload: boolean }
    ) => {
      state.authenticated = action.payload;
    },
    setDataUser: (
      state: { dataUser: DataUser | null },
      action: PayloadAction<DataUser | null>
    ) => {
      state.dataUser = action.payload;
    },
    setShowHome: (state: { showHome: boolean }) => {
      state.showHome = true;
    },
  },
});

const { reducer, actions } = authSlice;

export const { setAuthenticated, setDataUser, setShowHome } = actions;
export default reducer;
