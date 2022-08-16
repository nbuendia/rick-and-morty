import React, { useEffect, useState } from "react";
import axios from "axios";

//MUI
import { Container } from "@mui/material";

//COMPONENTS
import Loading from "./Loading";
import RandomCharacter from "./card/RandomCharacter";
import Footer from "./Footer";
import TitleBar from "./TitleBar";

//HOOKS
import useLocalStorage from "./hooks/useLocalStorage";

function Home() {
    const [loading, setLoading] = useState(true);
    const [character, getCharacter] = useState(null);
    const [episodes, getEpisodes] = useState(null);
    const [setLocalStorageValues, updateLocalStorageValues, getLocalStorageCharacter] = useLocalStorage();

    const URL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        axios.get(URL).then((res) => {
            return res.data;

        }).then((res) => {
            //CHOOSES A RANDOM NUMBER BETWEEN 1 AND TOTAL NUMBER OF CHARACTERS
            let randomNum = Math.floor(Math.random() * res.info.count + 1);
            let today = new Date().toDateString();

            //CHECK FOR DATE OR CHARACTER, IF ANY IS NULL ADD VALUES
            setLocalStorageValues(randomNum, today);

            //CHECK FOR DATE VALUE IF IT EXISTS, CHECK WITH TODAYS DATE AND CORRECT IF VALUES DONT MATCH AND UPDATE CHARACTER
            updateLocalStorageValues(randomNum, today);
            let characterNumber = getLocalStorageCharacter();

            axios.get(`${URL}/${characterNumber}`).then((res) => {
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
            console.error('Oh No! Something Went Wrong!', error)
        })
    }, []);

    if (loading) return <Loading />;

    return(
        <>
            <Container sx={{height: {xs: 75, sm: 100, md: 125, lg: 150}}} />
            <TitleBar />
            <RandomCharacter character={character} episodes={episodes} />
            <Footer />
            <Container sx={{height: {xs: 75, sm: 100, md: 125, lg: 150}}} />
        </>
    )

}

export default Home;

// // CHECK FOR DATE OR CHARACTER, IF ANY IS NULL ADD VALUES            
// if (!window.localStorage.getItem('date') || !window.localStorage.getItem('character')) {
//     if (!window.localStorage.getItem('date')) window.localStorage.setItem('date', today);
//     if (!window.localStorage.getItem('character')) window.localStorage.setItem('character', randomNum);
// }

// // CHECK FOR DATE VALUE IF IT EXISTS, CHECK WITH TODAYS DATE AND CORRECT IF VALUES DONT MATCH AND UPDATE CHARACTER
// if (window.localStorage.getItem('date')) {
//     if (today !== window.localStorage.getItem('date')) {
//         window.localStorage.setItem('date', today);
//         window.localStorage.setItem('character', randomNum);
//     }
// }

// let localStorageNum = window.localStorage.getItem('character');