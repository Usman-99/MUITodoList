import React from "react";
import { Box, Typography } from "@mui/material";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import Grid from "@mui/material/Grid2";
import * as Yup from "yup";
import { useFormik } from "formik";
import ErrorComponent from "../utils/CommonFunc";

const personSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .trim()
    .required("Email cannot be empty"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long!")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter!")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter!")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character!"
    )
    .matches(/[0-9]/, "Password must contain at least one digit!")
    .required("Password is required!"),
  feedback: Yup.string()
    .min(30, "Feedback must be at least 30 characters long!")
    .required("Feedback is required!"),
});
const FeedbackForm = ({ submitHandler }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      feedback: "",
    },
    validationSchema: personSchema,
    onSubmit: (value, { resetForm }) => {
      submitHandler(value);
      resetForm();
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        p: { xs: 2, md: 4 }, // Adjust padding for different screen sizes
        bgcolor: "background.paper",
        marginBottom: "15px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Feedback Form
      </Typography>
      <Grid container rowSpacing={2} columnSpacing={1} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextInput
            Label="Email"
            Name="email"
            Value={formik.values.email}
            Onchange={formik.handleChange}
            Color="success"
            Type="email"
            Onblur={formik.handleBlur}
            Error={formik.touched.email && Boolean(formik.errors.email)}
            HelperText={formik.errors.email}
          />
          {/* {formik.errors.email && formik.touched.email && (
            <ErrorComponent Text={formik.errors.email} />
          )} */}
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextInput
            Label="Password"
            Name="password"
            Value={formik.values.password}
            Onchange={formik.handleChange}
            Type="password"
            Onblur={formik.handleBlur}
            Color="success"
            Error={formik.touched.password && Boolean(formik.errors.password)}
            HelperText={formik.errors.password}
          />
          {/* {formik.errors.password && formik.touched.password && (
            <ErrorComponent Text={formik.errors.password} />
          )} */}
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
          <TextInput
            Label="Feedback"
            Name="feedback"
            Value={formik.values.feedback}
            Onchange={formik.handleChange}
            Type="text"
            Multiline={true}
            Onblur={formik.handleBlur}
            Color="success"
            Error={formik.touched.feedback && Boolean(formik.errors.feedback)}
            HelperText={formik.errors.feedback}
          />
          {/* {formik.errors.feedback && formik.touched.feedback && (
            <ErrorComponent Text={formik.errors.feedback} />
          )} */}
        </Grid>
        <Grid display="flex" justifyContent="center" maxHeight="3.5rem">
          <CustomButton
            Type="submit"
            Variant="contained"
            Color="warning"
            Full={true}
            Text="Submit"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeedbackForm;
