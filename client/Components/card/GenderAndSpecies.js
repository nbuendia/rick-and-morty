import React from "react";

//MUI
import { Box, Typography } from "@mui/material";

function GenderAndSpecies(props) {
    const { character } = props;

    return(
        <Box className="inner-card-content">
            <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'}>
                <b>GENDER:</b> {character.gender}
            </Typography>
            <hr className="hr"/>
            <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'}>
                <b>SPECIES:</b> {character.species}
            </Typography>
        </Box>
    )

}

export default GenderAndSpecies;