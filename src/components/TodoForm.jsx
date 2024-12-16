// Todo form without formik and yup
// import { Box, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid2";
// import TextInput from "../components/TextInput";
// import CustomButton from "../components/CustomButton";
// const TodoForm = ({ title, setTitle, description, setDescription, submitHandler, errors }) => {
//   return (
//     <Box
//       component="form"
//       onSubmit={submitHandler}
//       sx={{ width: "100%", mx: "auto", mt: 4,pt:2,pb:2,bgcolor:"white",borderRadius: 1}}
//     >
//       <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center" >

//         <Grid size={{ xs: 12, sm: 6, md: 4}}>
//           <TextInput
//             Multiline={false}
//             Label="Enter a Todo..."
//             Value={title}
//             Onchange={(e) => setTitle(e.target.value)}
//             SX={{ bgcolor: "background.paper", borderRadius: 1}}
//             Type="text"
//             Name="title"
//           />
//           {errors.title && (
//             <Typography color="error" sx={{ fontSize: "0.875rem" }}>
//               {errors.title}
//             </Typography>
//           )}
//         </Grid>

//         {/* Description input */}
//         <Grid size={{ xs: 12, sm: 6, md: 4 }}>
//           <TextInput
//             Multiline={false}
//             Label="Description"
//             Value={description}
//             Onchange={(e) => setDescription(e.target.value)}
//             SX={{ bgcolor: "background.paper", borderRadius: 1 }}
//             Type="text"
//             Name="description"
//           />
//           {errors.description && (
//             <Typography color="error" sx={{ fontSize: "0.875rem" }}>
//               {errors.description}
//             </Typography>
//           )}
//         </Grid>

//         {/* Add Todo Button */}
//         <Grid display="flex" justifyContent="center" maxHeight="3.5rem">
//           <CustomButton
//             Size="small"
//             Type="submit"
//             Variant="contained"
//             Color="secondary"
//             SX={{ fontSize: "1rem", fontWeight: "bold" }}
//             Text="Add Todo"
//           />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default TodoForm;

// todoform with formik and yup
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorComponent  from "../utils/CommonFunc";

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
        px: 1,
        mt: 4,
        pt: 2,
        pb: 2,
        bgcolor: "white",
        borderRadius: 1,
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={2} justifyContent="center">
        {/* Todo Title input */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextInput
            Multiline={false}
            Label="Enter a Todo..."
            Value={formik.values.title}
            Onchange={formik.handleChange}
            SX={inputObj}
            Type="text"
            Name="title"
            Onblur={formik.handleBlur}
            Color="secondary"
          />
          {formik.touched.title && formik.errors.title && (
            <ErrorComponent Text={formik.errors.title} />
          )}
        </Grid>

        {/* Description input */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          />
          {formik.touched.description && formik.errors.description && (
            <ErrorComponent Text={formik.errors.description} />
          )}
        </Grid>

        {/* Add Todo Button */}
        <Grid display="flex" justifyContent="center" maxHeight="3.5rem">
          <CustomButton
            Size="small"
            Type="submit"
            Variant="contained"
            Color="secondary"
            SX={{ fontWeight: "bold" }}
            Text="Add Todo"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoForm;