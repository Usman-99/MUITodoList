import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomSidebar = () => {
  return (
    <Box sx={{ p: 3, bgcolor: 'secondary.light', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Sidebar
      </Typography>
      <Typography>
        sidebar
      </Typography>
    </Box>
  );
};

export default CustomSidebar;
