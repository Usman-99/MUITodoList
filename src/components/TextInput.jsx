import { TextField } from "@mui/material";
const TextInput = ({
  Label,
  Name,
  Value,
  Onchange,
  SX,
  Type,
  Multiline = false,
  Full = false,
}) => {
  return (
    <TextField
      label={Label}
      name={Name}
      fullWidth
      type={Type}
      required
      variant="outlined"
      value={Value}
      onChange={Onchange}
      sx={SX}
      multiline={Multiline}
    />
  );
};
export default TextInput;
