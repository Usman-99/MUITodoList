import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
// import ErrorComponent  from "../utils/CommonFunc";

// Validation schema using Yup
const validationSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(10, "Title must be at least 10 characters long!")
    .required("Todo title cannot be empty!"),

  description: Yup.string()
    .trim()
    .min(30, "Description must be at least 30 characters long!")
    .required("Description cannot be empty!"),
});

const inputObj = { bgcolor: "background.paper", borderRadius: 1 };
const TodoForm = ({ submitHandler }) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value, { resetForm }) => {
      submitHandler(value); // Submit form values to the parent component
      resetForm(); // Reset form after submission
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        width: "100%",
        display:"flex",
        justifyContent: "center",
  
        flexDirection: "column",
        px: 1,
        mt: 4,
        pt: 2,
        pb: 2,
        bgcolor: "white",
        borderRadius: 1,
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        <Grid size={{ xs: 12, sm: 6, md: 4,lg:5 }}>
          <TextInput
            Full
            Size="small"
            Multiline={false}
            Label="Enter a Todo..."
            Value={formik.values.title}
            Onchange={formik.handleChange}
            SX={inputObj}
            Type="text"
            Name="title"
            Onblur={formik.handleBlur}
            Color="secondary"
            Error={formik.touched.title && Boolean(formik.errors.title)}
            HelperText={formik.errors.title}
          />
          {/* {formik.touched.title && formik.errors.title && (
            <ErrorComponent Text={formik.errors.title} />
          )} */}
        </Grid>

        {/* Description input */}
        <Grid size={{ xs: 12, sm: 6, md: 4,lg:5 }}>
          <TextInput
            Multiline={true}
            Label="Description"
            Value={formik.values.description}
            Onchange={formik.handleChange}
            SX={inputObj}
            Type="text"
            Name="description"
            Onblur={formik.handleBlur}
            Color="secondary"
            Error={formik.touched.description && Boolean(formik.errors.description)}
            HelperText={formik.errors.description}
            Size="small"
          />
          {/* {formik.touched.description && formik.errors.description && (
            <ErrorComponent Text={formik.errors.description} />
          )} */}
        </Grid>

        {/* Add Todo Button */}
        <Grid size={{ xs:12, sm: 3, md: 3,lg:2 }} display="flex" justifyContent="center" maxHeight="2.5rem">
          <CustomButton
            Size="small"
            Type="submit"
            Variant="contained"
            Color="secondary"
            SX={{ fontWeight: "bold" }}
            Text="Add Todo"
            Full={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoForm;
