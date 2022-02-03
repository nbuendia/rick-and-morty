import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function Loading() {
  return (
    <Box className="loading-container">
      <Typography fontFamily={'Creepster'} fontSize={60} fontWeight={800} color={'whitesmoke'}>
        LOADING. . .
      </Typography>
      <br />
      <img 
        src="https://media.giphy.com/media/n5GXsYKoe1F3eFcRgq/giphy.gif"
        width="350"
        height="230"
        frameBorder="0"
        allowFullScreen 
      />
    </Box>
  );
}
 export default Loading;