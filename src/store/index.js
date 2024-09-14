import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./signup-slice";
import blogReducer from "./blog-slice";
import pageReducer from "./page-slice";

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    blog: blogReducer,
    page: pageReducer,
  },
});