import React, { useEffect, useState } from "react";
import axios from "axios";

//COMPONENTS
import Loading from "./Loading";
import RandomCharacter from "./RandomCharacter";


function Home() {
    const [loading, setLoading] = useState(true);
    // const [data, getData] = useState(null);
    const [character, getCharacter] = useState(null);
    
    const charactersURL = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        axios.get(charactersURL).then((res) => {
            // getData(res.data);
            return res.data;
        }).then((res) => {
            axios.get(`${charactersURL}/${Math.floor(Math.random() * res.info.count + 1)}`).then((res) => {
                getCharacter(res.data)
                setTimeout(() => {
                    setLoading(false);
                }, 3000);
            })
        })
        .catch((error) => {
            console.error('Oh No? Something Went Wrong!', error)
        })
    }, []);

    if (loading) return <Loading />;

    return(
        <>
            <RandomCharacter character={character} />
        </>
    )

}

export default Home;