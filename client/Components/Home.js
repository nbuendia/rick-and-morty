import React, { useEffect, useState } from "react";
import axios from "axios";

//COMPONENTS
import Loading from "./Loading";
import RandomCharacter from "./RandomCharacter";
import Footer from "./Footer";


function Home() {
    const [loading, setLoading] = useState(true);
    const [character, getCharacter] = useState(null);
    
    const URL = 'https://rickandmortyapi.com/api';

    useEffect(() => {
        axios.get(`${URL}/character`).then((res) => {
            return res.data;
        }).then((res) => {
            //URL/CHARACTER/NUMBER -- NUMBER IS RANDOMLY CHOSEN BETWEEN 0-TOTAL NUMBER OF CHARACTERS
            axios.get(`${URL}/character/${Math.floor(Math.random() * res.info.count + 1)}`).then((res) => {
                getCharacter(res.data)
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            })
            // axios req episode to add to card
        })
        .catch((error) => {
            console.error('Oh No? Something Went Wrong!', error)
        })
    }, []);

    if (loading) return <Loading />;

    return(
        <>
            <RandomCharacter character={character} />
            <Footer />
        </>
    )

}

export default Home;