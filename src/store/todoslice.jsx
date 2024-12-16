import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoItems: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload); 
    },
    deleteTodo: (state, action) => {
      state.todoItems = state.todoItems.filter((_, index) => index !== action.payload); 
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

