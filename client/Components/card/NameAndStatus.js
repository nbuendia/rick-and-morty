import React from "react";

//MUI
import { Typography, Box } from "@mui/material";
//MUI ICONS
import CircleIcon from '@mui/icons-material/Circle';

function NameAndStatus(props) {
    const { character } = props;

    return(
        <>
            <Typography component='div' fontWeight={700} fontSize={65} color={'whiteSmoke'} textAlign={'center'}>
                <span className="block-display line-spacing-5">
                    {character.name}
                </span>
                <span className="block-display" style={{fontSize: 30, fontWeight: '300'}}>
                    {character.status === 'Alive' ? 
                        <Box>
                            <CircleIcon style={{fontSize: '10px', color: 'green'}} /> {character.status}
                        </Box>
                    : character.status === 'Dead' ? 
                        <Box>
                            <CircleIcon style={{fontSize: '10px', color: 'red'}} /> {character.status}
                        </Box>
                    : 
                        <Box>
                            <CircleIcon style={{fontSize: '10px'}} /> {character.status}
                        </Box>
                    }
                </span>
            </Typography>
        </>
    )

}

export default NameAndStatus;