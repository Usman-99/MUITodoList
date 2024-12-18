// Todo page with redux toolkit,formik and yup
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";
import CustomTable from "../components/CustomTable";
import {addTodo,deleteTodo} from "../store/commonslice"
function AddTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.commonData.todoItems); // Get todos from Redux state

  const theadData = ["Title", "Description", "Delete"];
  const submitHandler = (value) => {
    // Dispatch addTodo action with form values
    dispatch(addTodo({ title: value.title, description: value.description }));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index)); // Dispatch deleteTodo action
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "cyan",
        mt: 10,
        pt: 5,
        px: 2,
        mb:3
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: {
            xs: "2rem",
            sm: "2rem",
            md: "3rem",
            lg: "2.5rem",
            xl: "3rem",
          },
        }}
        align="center"
      >
        Todos List
      </Typography>
      <TodoForm submitHandler={submitHandler} />
      <CustomTable
        deleteData={handleDelete}
        theadData={theadData}
        data={todoList.map((todo) => ({
          column1: todo.title,
          column2: todo.description,
        }))}
      />
    </Box>
  );
}

export default AddTodo;
