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
const TodoItemsTable = ({ todo, deleteTodo }) => {
  const theadData = ["Title", "Description", "Remove"];
const commonsxObj={
  wordWrap: "break-word", // Allow text to wrap to the next line
  whiteSpace: "normal",   // Ensure long text doesn't stay on one line
  maxWidth: "65px"       // Set a max-width to trigger wrapping on small screens
}
  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 6, mb: 3, borderRadius: 1, border:"2px solid purple" }}
    >
      <Table sx={{ minWidth: 300 }} aria-label="Todo Table">
        <TableHead>
          <TableRow>
            {theadData.map((item, index) => (
              <TableCell
                key={index}
                sx={{ fontWeight: "bold" }}
                align={item === "Remove" ? "right" : "justify"}
              >
                {item}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {todo.map((item, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row" sx={commonsxObj}>
                {item.title}
              </TableCell>
              <TableCell sx={{
                  ...commonsxObj,  
                  maxWidth: "115px" 
                }}>{item.description}</TableCell>
              <TableCell align="right">
                <IconButton
                  sx={{ "&:hover": { color: "red" } }}
                  aria-label="delete"
                  onClick={() => deleteTodo(index)}
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

export default TodoItemsTable;
