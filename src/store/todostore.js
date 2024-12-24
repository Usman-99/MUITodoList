import { configureStore } from "@reduxjs/toolkit";
import commonDataReducer from "./commonslice"

const store = configureStore({
  reducer: {
    commonData:commonDataReducer
  },
});

export default store;


