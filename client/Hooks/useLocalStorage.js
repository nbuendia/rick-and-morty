import { useState } from "react";

function useLocalStorage() {
    // const today = new Date().toString();
    // const localStorageDate = window.localStorage.getItem('date');
    // const localStorageCharacter = window.localStorage.getItem('character');

    // const setCharacter = (character) => {
    //     window.localStorage.setItem("character", character);
    // };

    // const setDate = (date) => {
    //     window.localStorage.setItem('date', date);
    // };

    // const getCurrentDate = () => {
    //     if (today !== localStorageDate) return null;
    //     return localStorageDate;
    // };

    // const getActiveCharacter = () => {
    //     if (today !== localStorageDate) return null;
    //     return localStorageCharacter;
    // };

    const removeCharacter = () => {
        window.localStorage.removeItem('character');
    };

    // return [getActiveCharacter, getCurrentDate, setCharacter, setDate, removeCharacter];
    return [removeCharacter];
};

export default useLocalStorage;                   