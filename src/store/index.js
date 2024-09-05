import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signup-slice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
  },
});