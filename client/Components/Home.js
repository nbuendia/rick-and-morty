import React, { useEffect, useState } from "react";
import axios from "axios";

//COMPONENTS
import Loading from "./Loading";
import RandomCharacter from "./card/RandomCharacter";
import Footer from "./Footer";
import TitleBar from "./TitleBar";
import { Container } from "@mui/material";

function Home() {
    const [loading, setLoading] = useState(true);
    const [character, getCharacter] = useState(null);
    const [episodes, getEpisodes] = useState(null);
    
    const URL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        axios.get(`${URL}`).then((res) => {
            return res.data;

        }).then((res) => {
            //CHOOSES A RANDOM NUMBER BETWEEN 1 AND TOTAL NUMBER OF CHARACTERS
            let randomNum = Math.floor(Math.random() * res.info.count + 1);
            axios.get(`${URL}/${randomNum}`).then((res) => {
                getCharacter(res.data)
                return res.data;

            }).then((res) => {
                axios.all(res.episode.map((episode) => axios.get(episode))).then((res) => {
                    let episodeData = res.map(episode => episode.data);
                    getEpisodes(episodeData);

                    //ADDED TIMEOUT SO LOADING DOESNT LOOK LIKE A GLITCH
                    setTimeout(() => {
                        setLoading(false);
                    }, 3000);
                })
            })
        })
        .catch((error) => {
            console.error('Oh No? Something Went Wrong!', error)
        })
    }, []);

    if (loading) return <Loading />;

    return(
        <>
            <Container style={{height: '250px'}} />
            <TitleBar />
            <RandomCharacter character={character} episodes={episodes} />
            <Footer />
            <Container style={{height: '250px'}} />
        </>
    )

}

export default Home;