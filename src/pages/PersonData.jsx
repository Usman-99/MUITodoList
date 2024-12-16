import { useDispatch, useSelector } from "react-redux";
import { removeData } from "../store/personSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
} from "@mui/material";
const PersonData = () => {
  const dispatch = useDispatch();
  const personsData = useSelector((state) => state.personalData.data);
  const handleDelete = (index) => dispatch(removeData(index));
  const theadData = ["Email", "Feedback", "Delete"];
  const commonsxObj = {
    wordWrap: "break-word", // Allow text to wrap to the next line
    whiteSpace: "normal", // Ensure long text doesn't stay on one line
    maxWidth: "65px", // Set a max-width to trigger wrapping on small screens
  };
  return (
    <Box sx={{display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
       }}>
    <TableContainer
      component={Paper}
      sx={{ mt: 10, mb: personsData > 5 ? "1rem" : "20rem", borderRadius: 1, border: "2px solid purple" }}

    >
      <Table sx={{ minWidth: 300 }} aria-label="Todo Table">
        <TableHead>
          <TableRow>
            {theadData.map((item, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: "bold" }}
                align={item === "Delete" ? "right" : "justify"}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {personsData.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={commonsxObj}>
                {item.email}
              </TableCell>
              <TableCell
                sx={{
                  ...commonsxObj,
                  maxWidth: "115px",
                }}
              >
                {item.feedback}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  sx={{ "&:hover": { color: "red" } }}
                  aria-label="delete"
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></Box>
  );
};

export default PersonData;
