import React from "react";

//MUI
import { Card, CardContent, CardMedia, Container, Typography } from "@mui/material";

function RandomCharacter(props) {
    const { character } = props;

    console.log(character);

    return(
        <>
            <Container>
                <Card style={{display: 'flex', background: 'green'}} >
                    <CardMedia 
                        component='img'
                        image={character.image}
                        alt={`${character.name} Image`}
                        style={{width: 250}}
                    />
                    <CardContent>
                    <Typography>
                        {character.name}<br/>
                        {character.gender}<br/>
                        {character.species}<br/>
                        {character.status}
                    </Typography>
                    </CardContent>
                </Card>
            </Container>
        </>
    )

}

export default RandomCharacter;