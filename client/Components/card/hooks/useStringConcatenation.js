function useStringConcatenation (episodes) {
    const episodeNames = episodes.map(episode => episode.name);
    const seasonEpisodeNum = episodes.map(episode => episode.episode);
    let featuredIn = '';
    
    if (episodeNames.length === 1) return `${episodeNames[0]}: ${seasonEpisodeNum[0]}`;
    else if (episodeNames.length === 2) return `${episodeNames[0]}: ${seasonEpisodeNum[0]} & ${episodeNames[1]}: ${seasonEpisodeNum[1]}`;

    if (episodeNames.length > 2) {
        let lastName = episodeNames.pop();
        let lastDetail = seasonEpisodeNum.pop();
        let length = episodeNames.length > 5 ? 5 : episodeNames.length;
        let last = episodeNames.length < 5 ? ` & ${lastName}: ${lastDetail}` : ` ${lastName}: ${lastDetail} & Many More!`;

        //USED 5 TO AVOID A LONG LIST. EX. RICK WOULD BE FEATURED IN EVERY EPISODE
        for (let i = 0; i < length; i++) {
            featuredIn += `${episodeNames[i]}: ${seasonEpisodeNum[i]}`;

            //IF CHARACTER HAS MORE THAN 5 EPISODES IT ADDS COMMA TILL THE END ELSE B/W ALL WORDS EXCEPT LAST
            if (episodeNames.length > 5) featuredIn += ', ';
            else if (i < length - 1) featuredIn += ', ';
        }

        return featuredIn + last;
    }
}

export default useStringConcatenation;