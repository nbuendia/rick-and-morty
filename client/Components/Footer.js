import React from "react";

//MUI
import { Box, Tooltip, Typography } from "@mui/material";
import Zoom from '@mui/material/Zoom';
//MUI ICONS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const imgURL = 'https://i.imgur.com/JZXLbjV.png';

  return (
    <Box className='footer' height={{xs: 100, sm: 125, md: 150, lg: 175}}>
      <>
        <a href="https://www.adultswim.com/streams/rick-and-morty" target='_blank' rel="noreferrer noopener">
          <Typography className="link" fontSize={{xs: 35, sm: 45, md: 55, lg: 65}} color='black' style={{lineHeight: '1'}}>
            Wanna watch some Rick & Morty?
          </Typography>
        </a>
      </>
      
      <Box className="inner-footer-box">
        <Box>
          <Typography fontSize={{xs: 25, sm: 30, md: 35}} marginRight={'5px'} style={{lineHeight: '1'}}>
            Inspired by
          </Typography>

          <Tooltip title={<Typography fontSize={15}>Rick & Morty API</Typography>} TransitionComponent={Zoom} placement="right">
            <a href="https://rickandmortyapi.com/" target='_blank' rel="noreferrer noopener">
              <img src={imgURL} height={35}/>
            </a>
          </Tooltip>
        </Box>

        <Box className="icon-box">
          <Typography fontSize={{xs: 25, sm: 30, md: 35}} style={{lineHeight: '1'}}>
            Find me!
          </Typography>

          <Box>
            <a href="https://www.linkedin.com/in/nicole-buendia/" target='_blank' rel="noreferrer noopener">
              <LinkedInIcon style={{color: '#0e76a8', fontSize: 35}} />
            </a>
            <a href="https://github.com/nbuendia" target='_blank' rel="noreferrer noopener">
              <GitHubIcon style={{color: 'black', marginLeft: '10px', fontSize: 35}} />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;