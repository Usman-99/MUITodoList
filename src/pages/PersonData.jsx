import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../store/commonslice";
import CustomTable from "../components/CustomTable";
import {
  Box,
  Typography,
} from "@mui/material";
const PersonData = () => {
  const dispatch = useDispatch();
  const personsData = useSelector((state) => state.commonData.data);
  const handleDelete = (index) => dispatch(removeData(index));
  const theadData = ["Email", "Feedback", "Delete"];
  return (
    <Box><Typography
    variant="h5"
    component="h4"
    sx={{
      fontWeight: "bold",
      mt:10,
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
    Person Details
  </Typography>
      {personsData.length > 0 ? (
        <Box sx={{mt:10, mb: personsData.length > 5 ? "1rem" : "20rem" }}>
          <CustomTable
            deleteData={handleDelete}
            theadData={theadData}
            data={personsData.map((person) => ({
              column1: person.email,
              column2: person.feedback,
            }))}
          />
          ;
        </Box>
      ) : (
        <Typography
          variant="h3"
          component="h3"
          sx={{
            mb: "20rem",
            mt: 10,
            fontSize: {
              xs: "2rem",
              sm: "2rem",
              md: "3rem",
              lg: "2rem",
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
};

export default PersonData;

