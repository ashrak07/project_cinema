import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isAuth: localStorage.getItem("isAuth") || false,
    showLogin: "login",
    userData: JSON.parse(localStorage.getItem("user")) || null,
    token: null,
  },
  reducers: {
    addUserData: (state, action) => {
      state.userData = action.payload;
      state.isAuth = true;
      localStorage.setItem("user", JSON.stringify(state.userData));
      localStorage.setItem("isAuth", state.isAuth);
    },
    addToken: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.userData = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
    },
    changeToLogin: (state) => {
      state.showLogin = "login";
    },
    changeToSignin: (state) => {
      state.showLogin = "signup";
    },
  },
});

export const { addUserData, addToken, logOut, changeToLogin, changeToSignin } =
  userSlice.actions;

export default userSlice.reducer;
