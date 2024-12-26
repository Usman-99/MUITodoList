import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import Grid from "@mui/material/Grid2";
import * as Yup from "yup";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ErrorComponent from "../utils/CommonFunc";

const personSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .trim()
    .required("Email is required!"),
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
  const [showPassword, setShowPassword] = useState(false);

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

  const handleClickShowPassword = () => {
    if (formik.values.password !== "") {
      setShowPassword(!showPassword);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        p: { xs: 2, md: 4 ,sm:3},
        bgcolor: "background.paper",
        marginBottom: "15px",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        mx: {sm:"1rem",md:"2rem",lg:"3rem"},
        px:{sm:"5rem",md:"9rem",lg:"10rem"},
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
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
            Size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <FormControl sx={{ width: "100%" }} variant="outlined" size="small">
            <InputLabel
              htmlFor="outlined-adornment-password"
              error={formik.touched.password && Boolean(formik.errors.password)}
              sx={{
                backgroundColor: "background.paper",
                px: 0.5,
              }}
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="password"
              size="small"
              error={formik.touched.password && Boolean(formik.errors.password)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="small"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {formik.errors.password && formik.touched.password && (
              <ErrorComponent Text={formik.errors.password} />
            )}
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
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
            Size="small"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} display="flex" justifyContent="center" maxHeight="2.5rem">
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
