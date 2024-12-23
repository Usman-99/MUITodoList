import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../store/commonslice";
import CustomTable from "../components/CustomTable";
import { Box, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";
const PersonData = () => {
  const { text } = useOutletContext();
  const dispatch = useDispatch();
  const personsData = useSelector((state) => state.commonData.data);
  const handleDelete = (index) => dispatch(removeData(index));
  const theadData = ["Email", "Feedback", "Delete"];
  return (
    <Box>
      <Typography
        variant="h5"
        component="h4"
        sx={{
          fontWeight: "bold",
          mt: 12,
          mb: 4,
          fontSize: {
            xs: "1rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "2rem",
          },
        }}
        align="center"
      >
        {text}
        {/* {context.items.map(i=>(<div>{i}</div>))} */}
      </Typography>
      {personsData.length > 0 ? (
        <Box sx={{ mt: 10, mb: 2 }}>
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
};

export default PersonData;
