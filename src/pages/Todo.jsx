import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";
import CustomTable from "../components/CustomTable";
import { addTodo, deleteTodo } from "../store/commonslice";
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
        backgroundColor: "gainsboro",
        mt: 10,
        pt: 5,
        px: 2,
        mb: 3,
        borderRadius: "2rem",
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
      {todoList.length > 0 ? (
        <CustomTable
          deleteData={handleDelete}
          theadData={theadData}
          data={todoList.map((todo) => ({
            column1: todo.title,
            column2: todo.description,
          }))}
        />
      ) : (
        <Typography
          variant="h3"
          component="h3"
          sx={{
            mb: 3,
            mt: 10,
            fontSize: {
              xs: "1rem",
              sm: "1rem",
              md: "1.5rem",
              lg: "1.5rem",
              xl: "2rem",
            },
          }}
          align="center"
        >
          No records found
        </Typography>
      )}
    </Box>
  );
}

export default AddTodo;
