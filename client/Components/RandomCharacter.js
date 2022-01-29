import React from "react";

//MUI
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function RandomCharacter(props) {
    const { character } = props;

    console.log(character);

    return(
        <>
            <Box className="character-container">
                <Card className='card' style={{backgroundColor: 'rgb(85, 110, 155)'}}>
                    <CardMedia 
                        component='img'
                        image={character.image}
                        alt={`${character.name} Image`}
                        style={{width: 250, height: '100%', borderTopLeftRadius: 10, borderBottomRightRadius: 10, boxShadow: '0 0 10px 5px rgb(50, 65, 95)'}}
                    />
                    <CardContent className="card-content">
                        <>
                            <Typography fontWeight={700} fontSize={65} color={'whiteSmoke'} textAlign={'center'}>
                                <span className="br">
                                    {character.name}
                                </span>
                                <span style={{fontSize: 30}}>
                                    {character.status}
                                </span>
                            </Typography>
                        </>
                        <br/>
                        <Box className="inner-card-content">
                            <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'} >
                                <b>GENDER:</b> {character.gender}
                            </Typography>
                            <hr className="hr"/>
                            <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'}>
                                <b>SPECIES:</b> {character.species}
                            </Typography>
                        </Box>
                        <>
                            <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'} textAlign={'center'}>
                                <b>LAST KNOWN LOCATION: </b> {character.location.name}
                            </Typography>
                        </>
                    </CardContent>
                </Card>
            </Box>
        </>
    )

}

export default RandomCharacter;