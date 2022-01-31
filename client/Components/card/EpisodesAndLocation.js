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
            let length = nameArr.length > 5 ? 5 : nameArr.length;
            let last = nameArr.length < 5 ? ` & ${lastName}: ${lastDetail}` : ` ${lastName}: ${lastDetail} & Many More!`;

            //USED 5 TO AVOID A LONG LIST. EX. RICK WOULD BE FEATURED IN EVERY EPISODE
            for (let i = 0; i < length; i++) {
                featuredIn += `${nameArr[i]}: ${detailArr[i]}`;

                //IF CHARACTER HAS MORE THAN 5 EPISODES IT ADDS COMMA B/W ALL WORDS ELSE B/W ALL WORDS EXCEPT LAST TWO
                if (i < length && nameArr.length > 5) featuredIn += ', ';
                else if (i < length - 1) featuredIn += ', ';
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