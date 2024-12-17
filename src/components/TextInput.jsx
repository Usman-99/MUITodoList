import { TextField } from "@mui/material";
const TextInput = ({
  Label,
  Name,
  Value,
  Onchange,
  SX,
  Type,
  Multiline = false,
  Full = true,
  Req = false,
  Onblur,
  Color,
  HelperText,
  Error
}) => {
  return (
    <TextField
      label={Label}
      color={Color}
      autoComplete="off"
      name={Name}
      fullWidth={Full}
      type={Type}
      required={Req}
      variant="outlined"
      value={Value}
      onChange={Onchange}
      sx={SX}
      multiline={Multiline}
      onBlur={Onblur}
      error={Error}
      helperText={HelperText}
    />
  );
};
export default TextInput;
