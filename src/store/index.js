import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signup-slice";
import blogReducer from "./blog-slice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    blog: blogReducer,
  },
});