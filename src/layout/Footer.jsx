import { Box, Container, Typography } from "@mui/material";
import { Link} from "react-router-dom";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { scrollToTop } from "../utils/CommonFunc";
import { pages } from "../constants/base";
import { HashLink } from "react-router-hash-link";

const StyledLink = styled(Link)(() => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "info.main",
        color: "white",
        padding: "20px 0",
      }}
    >
      <Container fixed>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={"fontWeightBold"}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company dedicated to providing the best products and
              services.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={"fontWeightBold"}>
              Quick Links
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {pages.map((page, index) => (
                <li>
                  {page.name === "Feedback" ? (
                    <HashLink
                      to={page.path}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {page.name}
                    </HashLink>
                  ) : (
                    <StyledLink
                      key={index}
                      to={page.path}
                    >
                      {page.name}
                    </StyledLink>
                  )}
                </li>
              ))}
            </ul>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={"fontWeightBold"}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: info@example.com <br />
              Phone: +123 456 7890
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" marginTop="20px">
          <Typography variant="body2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
