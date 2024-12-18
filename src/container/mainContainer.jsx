import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Container, Box } from '@mui/material';

const MainLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet /> 
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
