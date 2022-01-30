import React from "react";

//MUI
import { Box, Card, CardContent, CardMedia } from "@mui/material";

//COMPONENTS
import EpisodesAndLocation from "./EpisodesAndLocation";
import GenderAndSpecies from "./GenderAndSpecies";
import NameAndStatus from "./NameAndStatus";

function RandomCharacter(props) {
    const { character, episodes } = props;

    return(
        <Box className="character-container">
            <Card className='card' style={{backgroundColor: 'rgb(85, 110, 155)'}}>
                <CardMedia 
                    component='img'
                    image={character.image}
                    alt={`${character.name} Image`}
                    style={{width: 350, borderTopLeftRadius: 10, borderBottomRightRadius: 10, boxShadow: '0 0 10px 5px rgb(50, 65, 95)'}}
                />
                <CardContent className="card-content">
                    <NameAndStatus character={character} />
                    <GenderAndSpecies character={character} />
                    <br/>
                    <EpisodesAndLocation character={character} episodes={episodes} />
                </CardContent>
            </Card>
        </Box>
    )

}

export default RandomCharacter;