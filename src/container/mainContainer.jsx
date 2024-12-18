import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Container, Box } from '@mui/material';

const MainLayout = () => {
  const text="Personal Details"
  const items=["hello","world"]
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
    >
      <Header />
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        <Outlet context={{text,items}}/> 
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
