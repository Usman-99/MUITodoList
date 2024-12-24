import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todoItems: [],
  data: [],
};
const commonSlice= createSlice({
  name: "commonData",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(
        (_, index) => index !== action.payload
      );
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    removeData: (state, action) => {
      state.data = state.data.filter((_, index) => index !== action.payload);
    },
  },
});
export const { addTodo, addData, removeData, deleteTodo } = commonSlice.actions;
export default commonSlice.reducer;
