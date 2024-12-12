import { Box, Container, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom'; 
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { useEffect } from "react";


const StyledLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
export const pages=[{name:"Home",path:"/"},{name:"Add Todo",path:"/Todo"},{name:"Todo Items",path:"/TodoItems"}]
function Footer() {
  const { pathname, hash } = useLocation(); // Get current route path and hash

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to top
    });
  };

  // Scroll to the top whenever the route changes or when the same link is clicked
  useEffect(() => {
    if (!hash) {
      scrollToTop();// Scroll to top for all routes except hash (like feedback section)
    }
  }, [pathname, hash]);

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        padding: '20px 0',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={'fontWeightBold'}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a company dedicated to providing the best products and services.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={'fontWeightBold'}>
              Quick Links
            </Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {pages.map((page,index)=><li>
                <StyledLink to={page.path} onClick={() => {
                  if (pathname === page.path) scrollToTop(); // Scroll to top if already on Home page
                }}>{page.name}</StyledLink>
              </li>)}
            </ul>
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" gutterBottom fontWeight={'fontWeightBold'}>
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
