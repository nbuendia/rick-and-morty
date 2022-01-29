import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function Loading() {
  return (
    <Box className="loading-container">
      <Typography fontSize={30} fontWeight={800} color={"black"}>
        LOADING...
      </Typography>
      <br />
      <iframe 
        src="https://giphy.com/embed/n5GXsYKoe1F3eFcRgq"
        width="480"
        height="360"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </Box>
  );
}
 export default Loading;