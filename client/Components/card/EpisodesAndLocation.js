import React from "react";

//MUI
import { Typography } from "@mui/material";

function EpisodesAndLocation(props) {
    const { character, episodes } = props;

    const episodeNames = episodes.map(episode => episode.name);
    const seasonEpisodeNum = episodes.map(episode => episode.episode);

    function stringConcatenation (nameArr, detailArr) {
        if (nameArr.length === 1) return `${nameArr[0]}: ${detailArr[0]}`;
        else if (nameArr.length === 2) return `${nameArr[0]}: ${detailArr[0]} & ${nameArr[1]}: ${detailArr[1]}`;

        let featuredIn = '';
        
        if (nameArr.length > 2) {
            let lastName = nameArr.pop();
            let lastDetail = detailArr.pop();
            let last = ` & ${lastName}: ${lastDetail}`;

            for (let i = 0; i < nameArr.length; i++) {
                featuredIn += `${nameArr[i]}: ${detailArr[i]}`;
                if (i < nameArr.length - 1) featuredIn += ', ';
            }

            return featuredIn + last;
        }
    }

    let featuredInSentence = stringConcatenation(episodeNames, seasonEpisodeNum);

    return(
        <Typography fontWeight={300} fontSize={30} color={'whiteSmoke'} textAlign={'center'}>
            <span className="block-display line-spacing-6 line-margin">
                <b>LAST KNOWN LOCATION: </b> {character.location.name}
            </span>
            <span className="block-display line-spacing-6">
                <b>FEATURED IN: </b> {featuredInSentence}
            </span>
        </Typography>

    )

}

export default EpisodesAndLocation;