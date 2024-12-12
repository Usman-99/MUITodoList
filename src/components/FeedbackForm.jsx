import React from "react";
import { Box,Button, Typography } from "@mui/material";
import { useState } from "react";
import TextInput from "./TextInput";

const FeedbackForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 2, md: 4 }, // Adjust padding for different screen sizes
        bgcolor: "background.paper",
        marginBottom: "15px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: { xs: "100%", md: "600px" }, // Adjust max width for responsiveness
        width: "100%", // Full width on mobile
      }}
    >
      <Typography variant="h5" gutterBottom>
        Feedback Form
      </Typography>
      <TextInput Label="Name" Name="name" Value={formData.name} Onchange={handleChange} SX={{ mb: 2 }} Type="text"/>
      <TextInput Label="Email" Name="email" Value={formData.email} Onchange={handleChange} SX={{ mb: 2 }} Type="email"/>
      <TextInput Label="Feedback" Name="feedback" Value={formData.feedback} Onchange={handleChange} SX={{ mb: 3 }} Type="text" Multiline={true}/>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>
  );
};

export default FeedbackForm;
