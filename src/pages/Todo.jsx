// Todo page without redux toolkit

// import React, { useState } from "react";
// import { Box, Typography } from "@mui/material";
// import TodoForm from "../components/TodoForm"; // Import the TodoForm component
// import TodoItemsTable from "../components/TodoItemsTable"; // Import the TodoItemsTable component

// function AddTodo() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [todo, setTodo] = useState([]);
//   const [errors, setErrors] = useState({ title: "", description: "" });

//   const validateForm = () => {
//     let formIsValid = true;
//     let errors = { title: "", description: "" };

//     if (!title.trim()) {
//       errors.title = "Todo title cannot be empty!";
//       formIsValid = false;
//     }

//     if (!description.trim()) {
//       errors.description = "Description cannot be empty!";
//       formIsValid = false;
//     }

//     setErrors(errors);
//     return formIsValid;
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     setTodo([...todo, { title, description }]);
//     setTitle("");
//     setDescription("");
//     setErrors({ title: "", description: "" });
//   };

//   const deleteTodo = (index) => {
//     const newTodoList = todo.filter((_, i) => i !== index);
//     setTodo(newTodoList);
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         mt: 10,
//         px: 2,
//         mb:
//           todo.length > 5
//             ? "30%"
//             : { xs: "75%", sm: "90%", md: "80%", lg: "35%" },
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h1"
//         sx={{
//           fontWeight: "bold",
//           mb: 4,
//           fontSize: {
//             xs: "2rem",
//             sm: "2rem",
//             md: "3rem",
//             lg: "2.5rem",
//             xl: "3rem",
//           },
//         }}
//         align="center"
//       >
//         Todos List
//       </Typography>

//       {/* Render TodoForm here */}
//       <TodoForm
//         title={title}
//         setTitle={setTitle}
//         description={description}
//         setDescription={setDescription}
//         submitHandler={submitHandler}
//         errors={errors}
//       />

//       {/* Render TodoItemsTable here */}
//       <TodoItemsTable todo={todo} deleteTodo={deleteTodo} />
//     </Box>
//   );
// }

// export default AddTodo;


// Todo page with redux toolkit,formik and yup
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import TodoForm from "../components/TodoForm";
import TodoItemsTable from "../components/TodoItemsTable";
import { addTodo, deleteTodo } from "../store/todoslice"; 

function AddTodo() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems); // Get todos from Redux state

  // Handler for form submission
  const submitHandler = (value) => {
    // Dispatch addTodo action with form values
    dispatch(addTodo({ title: value.title, description: value.description }));
  };

  const handleDelete = (index) => {
    dispatch(deleteTodo(index)); // Dispatch deleteTodo action
  };

  // logic when formik and yup was not used

  //   const validateForm = () => {
//     let formIsValid = true;
//     let errors = { title: "", description: "" };

//     if (!title.trim()) {
//       errors.title = "Todo title cannot be empty!";
//       formIsValid = false;
//     }

//     if (!description.trim()) {
//       errors.description = "Description cannot be empty!";
//       formIsValid = false;
//     }

//     setErrors(errors);
//     return formIsValid;
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     dispatch(addTodo({ title, description })); // Dispatch addTodo action
//     setTitle("");
//     setDescription("");
//     setErrors({ title: "", description: "" });
//   };

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "gray",
      mt: 10,
      pt:5,
      px: 2,
      mb:
        todoList.length > 5
          ? "30%"
          : { xs: "75%", sm: "90%", md: "80%", lg: "35%" },
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

      {/* Pass submitHandler to TodoForm */}
      <TodoForm submitHandler={submitHandler} />

{/* TodoForm when Formik and Yup was not used */}

      {/* <TodoForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        submitHandler={submitHandler}
        errors={errors}
      /> */}


      <TodoItemsTable todo={todoList} deleteTodo={handleDelete} />
    </Box>
  );
}

export default AddTodo;
