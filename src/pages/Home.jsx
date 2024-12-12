import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import FeedbackForm from "../components/FeedbackForm"; // Adjust the path
import CustomSidebar from "../components/CustomSidebar"; // Adjust the path
import { Box, Container } from "@mui/material";

const Home = () => {
  const imglist = [
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
      alt: "img1",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
      alt: "img2",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
      alt: "img3",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
      alt: "img4",
    },
    {
      src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
      alt: "img5",
    },
  ];

  const handleFormSubmit = (formData) => {
    alert(
      `Form submitted with name: ${formData.name}, email: ${formData.email}, and feedback: ${formData.feedback}`
    );
  };

  return (
    <Container sx={{ mt: 4 }}>
      {/* Carousel Section */}
      <Box mb={6}>
        <CustomCarousel imglist={imglist} />
      </Box>

      {/* Sidebar and Form Layout */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
        mt={4}
      >
        {/* Sidebar */}
        <Box flexBasis={{ xs: "100%", lg: "25%" }} mb={{ xs: 4, lg: 0 }}>
          <CustomSidebar />
        </Box>

        {/* Feedback Form */}
        <Box flexGrow={1} display="flex" justifyContent="center">
          <FeedbackForm onSubmit={handleFormSubmit} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
