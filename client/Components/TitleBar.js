import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function TitleBar() {

  return (
    <Box className="title-bar" >
      <Typography fontSize={{xs: 35, sm: 50, md: 70, lg: 100}} fontFamily={'creepster'} style={{lineHeight: 1}}>
            RICK & MORTY RAMDOMIZER
        </Typography>
    </Box>
  );
}

export default TitleBar;