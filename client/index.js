import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//TO IMPORT FILES ON DEPLOYED BUILD
import '../public/style.css';
import '../public/rm-icon.png';

//MUI
import { createTheme, ThemeProvider } from "@mui/material";

//COMPONENTS
import App from './App'

const theme = createTheme({
    typography: {
        fontFamily: 'Dongle'
    }
});

ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>, document.getElementById('root')
);