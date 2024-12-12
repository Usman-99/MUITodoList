import React, { useState } from "react";
import { Box,  Button, Typography } from "@mui/material";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import Grid from '@mui/material/Grid2';
function AddTodo() {
  const [input, setInput] = useState("");
  const[todo,setTodo]=useState([])

const submitHandler=(e)=>{
    e.preventDefault()
    setInput('')
    setTodo([...todo,input])
}

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        px: 2,
        mb: todo.length>5 ? "30%" : {xs:"75%" ,sm:"60%",md:"50%",lg:"35%"}
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: 'bold', mb: 4 }}
        align="center"
      >
        Todos List
      </Typography>
<Box
  component="form"
  onSubmit={submitHandler}
  sx={{
    width: '100%',
    maxWidth: '500px',
    mx: 'auto', // Center form horizontally
    mt: 4,
  }}
>
  <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">

    <Grid size={{xs:7, sm:8}}>
      <TextInput
        Multiline={true}
        Label="Enter a Todo..."
        Value={input}
        Onchange={(e) => setInput(e.target.value)}
        SX={{
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
        Type="text"
        Name="input"
      />
    </Grid>

    {/* Add Todo Button */}
    <Grid size={{xs:5 ,sm:4}} display="flex" justifyContent="center">
      <CustomButton
      Size="medium"
        Type="submit"
        Variant="contained"
        Color="primary"
        SX={{
          py: { xs: 1.5, sm: 1 }, // Adjust padding for different screen sizes
          fontSize: '1rem',
        }}
      Text="Add Todo"/>
    </Grid>
  </Grid>
  <p>{todo.map(item=><p>{item}</p>)}</p>
</Box>
    </Box>
  );
}

export default AddTodo;
