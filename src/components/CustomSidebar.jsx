import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { pages } from '../constants/base'; // Assuming you have the same pages array for links

const StyledLink = styled(Link)(() => ({
  color: "white",
  textDecoration: 'none',
  display: 'block',
  marginBottom: '10px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const CustomSidebar = () => {
  const { pathname } = useLocation(); 

  return (
    <Box sx={{ p: 3, bgcolor: 'info.light', borderRadius: 2 }}>
      <Typography variant="h6" sx={{fontWeight:"bold"}} gutterBottom>
        Sidebar
      </Typography>
      <Box>
        {pages.map((page, index) => (
          <StyledLink 
            to={page.path} 
            key={index}
            onClick={() => {
              if (pathname === page.path) window.scrollTo(0, 0); 
            }}
          >
            {page.name}
          </StyledLink>
        ))}
      </Box>
    </Box>
  );
};

export default CustomSidebar;
