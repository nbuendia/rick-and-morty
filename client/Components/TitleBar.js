import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function TitleBar() {

  return (
    <Box className="title-bar" height={{xs: 100, sm: 125, md: 150, lg: 175}}>
      <Typography fontSize={{xs: 35, sm: 50, md: 70, lg: 100}} fontFamily={'creepster'} style={{lineHeight: 1}}>
            RICK & MORTY RAMDOMIZER
        </Typography>
        <Typography fontSize={{xs: 30, sm: 45, md: 60, lg: 80}} fontWeight={700} style={{lineHeight: 1}}>
            Get one Rick & Morty character a day
        </Typography>
    </Box>
  );
}

export default TitleBar;