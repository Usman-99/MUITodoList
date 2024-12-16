import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";
import personDataReducer from "./personSlice"

const store = configureStore({
  reducer: {
    todo: todoReducer, 
    personalData:personDataReducer
  },
});

export default store;


