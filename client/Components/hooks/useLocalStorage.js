const setCharacter = (character) => window.localStorage.setItem("character", character);
const setDate = (date) => window.localStorage.setItem('date', date);
const getLocalStorageDate = () => window.localStorage.getItem('date');
const getLocalStorageCharacter = () =>  window.localStorage.getItem('character');
export const removeLocalStorageCharacter = () => window.localStorage.removeItem('character');

function useLocalStorage() {
    const setLocalStorageValues = (character, date) => {
        const activeCharacter = getLocalStorageCharacter();
        const currentDate = getLocalStorageDate();

        if (!activeCharacter) setCharacter(character);
        if (!currentDate) setDate(date);
    };

    const updateLocalStorageValues = (character, date) => {
        let today = new Date().toDateString();
        const localStorageDate = getLocalStorageDate();

        if (localStorageDate) {
            if (localStorageDate !== today) {
                setCharacter(character);
                setDate(date);
            }
        }
    };

    return [setLocalStorageValues, updateLocalStorageValues, getLocalStorageCharacter];
};

export default useLocalStorage;                   