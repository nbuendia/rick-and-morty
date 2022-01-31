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
    <Box className='footer'>
      <Box style={{display: 'flex', alignItems: 'center'}}>
        <Typography fontSize={50} marginRight={'5px'}>
          Inspired by
        </Typography>

        <Tooltip title={<Typography fontSize={15}>Rick & Morty API</Typography>} TransitionComponent={Zoom} placement="right">
          <a href="https://rickandmortyapi.com/" target='_blank' rel="noreferrer noopener">
            <img src={imgURL} height={45}/>
          </a>
        </Tooltip>
      </Box>

      <>
        <a href="https://www.adultswim.com/streams/rick-and-morty" target='_blank' rel="noreferrer noopener">
          <Typography className="link" fontSize={35} color='black' style={{lineHeight: '1.5'}}>
            Wanna watch some Rick & Morty?
          </Typography>
        </a>
      </>

      <Box>
        <Typography fontSize={30} style={{lineHeight: '1'}}>
          Find me!
        </Typography>
        <a href="https://www.linkedin.com/in/nicole-buendia/" target='_blank' rel="noreferrer noopener">
          <LinkedInIcon style={{color: '#0e76a8'}} />
        </a>
        <a href="https://github.com/nbuendia" target='_blank' rel="noreferrer noopener">
          <GitHubIcon style={{color: 'black', marginLeft: '10px'}} />
        </a>
      </Box>
    </Box>
  );
}

export default Footer;