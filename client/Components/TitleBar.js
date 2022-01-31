import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function TitleBar() {

  return (
    <Box className="title-bar">
        <Typography fontSize={80} fontFamily={'creepster'} style={{lineHeight: 1}}>
            RICK & MORTY RAMDOMIZER
        </Typography>
        <Typography fontSize={50} fontWeight={700} style={{lineHeight: 1}}>
            Get one Rick & Morty character a day
        </Typography>
    </Box>
  );
}

export default TitleBar;