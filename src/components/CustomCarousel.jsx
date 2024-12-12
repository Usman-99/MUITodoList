import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@mui/material/styles';

const commonObj={
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
};
const CustomCarousel = ({ imglist }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imglist.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === imglist.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      {/* Carousel Wrapper */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '200px', md: '400px' }, // Responsive height
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        {imglist.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: currentIndex === index ? 'block' : 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {imglist.map((_, index) => (
          <IconButton
            key={index}
            sx={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor:
                currentIndex === index
                  ? theme.palette.primary.main
                  : theme.palette.grey[300],
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>

      {/* Slider Controls */}
      <IconButton
        sx={{...commonObj,left:"10px"}}
        onClick={handlePrev}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        sx={{...commonObj,right:"10px"}}
        onClick={handleNext}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};
export default CustomCarousel;
