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
} from "@mui/material";
const CustomTable = ({ data, deleteData ,theadData}) => {

const commonsxObj={
  wordWrap: "break-word", // Allow text to wrap to the next line
  whiteSpace: "normal",   // Ensure long text doesn't stay on one line
  maxWidth: "65px"       // Set a max-width to trigger wrapping on small screens
}
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 6, mb: 3, borderRadius: 1, border:"2px solid black" }}
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
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={commonsxObj}>
                {item.column1}
              </TableCell>
              <TableCell sx={{
                  ...commonsxObj,  
                  maxWidth: "115px" 
                }}>{item.column2}</TableCell>
              <TableCell align="right">
                <IconButton
                  sx={{ "&:hover": { color: "red" } }}
                  size="large"
                  aria-label="delete"
                  color="secondary"
                  onClick={() => deleteData(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
