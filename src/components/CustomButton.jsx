import { Button } from "@mui/material"
const CustomButton = ({Type,Variant,Color,Key,clickFunction,SX,Full=false}) => {
  return (
    <Button type={Type} variant={Variant} color={Color} fullWidth={Full} sx={SX} key={Key} onClick={clickFunction}>
        Submit
      </Button>
  )
}
export default CustomButton