function useLocalStorage() {
    // let randomNum = Math.floor(Math.random() * res.info.count + 1);
    // let today = new Date().toDateString();
    // let date = window.localStorage.getItem('date');
    // let character = window.localStorage.getItem('character');

    // if (!date || !character) {
    //     !date && window.localStorage.setItem('date', today);
    //     !character && window.localStorage.setItem('character', randomNum);
    // };

    // if (date) {
    //     if (today !== date) {
    //         window.localStorage.setItem('date', today);
    //         window.localStorage.setItem('character', randomNum);
    //     };
    // };
    
    
    const removeCharacter = () => {
        window.localStorage.removeItem('character');
        document.location.reload();
    }

    return [removeCharacter];
};

export default useLocalStorage;                   

//<Home/>
//CHOOSES A RANDOM NUMBER BETWEEN 1 AND TOTAL NUMBER OF CHARACTERS
// let randomNum = Math.floor(Math.random() * res.info.count + 1);
// let today = new Date().toDateString();

// //CHECK FOR DATE OR CHARACTER, IF ANY IS NULL ADD VALUES
// if (!window.localStorage.getItem('date') || !window.localStorage.getItem('character')) {
//     if (!window.localStorage.getItem('date')) window.localStorage.setItem('date', today);
//     if (!window.localStorage.getItem('character')) window.localStorage.setItem('character', randomNum);
// }

// //CHECK FOR DATE VALUE IF IT EXISTS, CHECK WITH TODAYS DATE AND CORRECT IF VALUES DONT MATCH AND UPDATE CHARACTER
// if (window.localStorage.getItem('date')) {
//     if (today !== window.localStorage.getItem('date')) {
//         window.localStorage.setItem('date', today);
//         window.localStorage.setItem('character', randomNum);
//     }
// }

// let localStorageNum = window.localStorage.getItem('character');

// //<RandomCharacter/>
// function handleClick () {
//     window.localStorage.removeItem('character');
//     document.location.reload();
// }