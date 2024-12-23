import { Button } from "@mui/material";
const CustomButton = ({
  Type,
  Variant,
  Color,
  Key,
  Onclick,
  SX,
  Full = false,
  Text,
  Size,
}) => {
  return (
    <Button
      type={Type}
      variant={Variant}
      color={Color}
      fullWidth={Full}
      sx={SX}
      key={Key}
      onClick={Onclick}
      size={Size}
    >
      {Text}
    </Button>
  );
};
export default CustomButton;
