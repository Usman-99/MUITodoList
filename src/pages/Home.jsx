import React from "react";
import CustomCarousel from "../components/CustomCarousel";
import FeedbackForm from "../components/FeedbackForm"; // Adjust the path
import CustomSidebar from "../components/CustomSidebar"; // Adjust the path
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch} from "react-redux";
import { addData} from "../store/personSlice";


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

 const dispatch=useDispatch()
 const submitHandler=(value)=>
  dispatch(addData({email:value.email,password:value.password,feedback:value.feedback}))

  return (
    <Container sx={{ mt: 10}}>
      <Box mb={6}>
        <CustomCarousel imglist={imglist} />
      </Box>     
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3,lg:7,xl:6 }} sx={{placeContent:"center"}}>
          <Grid size={{ xs: 11, sm: 11, md: 10, lg: 6, xl: 6 }}>          
              <CustomSidebar />            
          </Grid>
          <Grid size={{ xs: 11, sm: 11, md: 10, lg: 6, xl: 6 }}>
              <FeedbackForm submitHandler={submitHandler} />
          </Grid>
        </Grid>
    </Container>
  );
};

export default Home;
