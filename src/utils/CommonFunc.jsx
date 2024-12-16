import { Typography } from "@mui/material";
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
const ErrorComponent = ({ Text }) => (
  <Typography color="error" sx={{ fontSize: "0.875rem" }}>
    {Text}
  </Typography>
);
export default ErrorComponent;