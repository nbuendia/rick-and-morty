import React from "react";

//MUI
import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";

//COMPONENTS
import EpisodesAndLocation from "./EpisodesAndLocation";
import GenderAndSpecies from "./GenderAndSpecies";
import NameAndStatus from "./NameAndStatus";

function RandomCharacter(props) {
    const { character, episodes } = props;

    function handleClick () {
        window.localStorage.removeItem('character');
        document.location.reload();
    }

    return(
        <Box className="character-container">
            <Card className='card' style={{backgroundColor: 'rgb(85, 110, 155)'}} sx={{flexDirection: {xs: 'column', md: 'row'}, width: {xs: 350, md: 'calc(100% - 10vw)'}}}>
                <CardMedia 
                    component='img'
                    image={character.image}
                    alt={`${character.name} Image`}
                    style={{width: 350, borderTopLeftRadius: 10, borderBottomRightRadius: 10, boxShadow: '0 0 10px 5px rgb(50, 65, 95)'}}
                />
                
                <CardContent className="card-content" sx={{width: {xs: 350, md: '100%'}}}>
                    <NameAndStatus character={character} />
                    <br/>
                    <GenderAndSpecies character={character} />
                    <br/>
                    <EpisodesAndLocation character={character} episodes={episodes} />
                </CardContent>
            </Card>
            
            <Button 
                variant="contained"
                onClick={handleClick}
                style={{fontSize: 25, fontWeight: 800, backgroundColor: 'rgb(220, 220, 220)', color: 'black', marginBottom: '25px'}}
            >
                RANDOMIZE
            </Button>
        </Box>
    )

}

export default RandomCharacter;