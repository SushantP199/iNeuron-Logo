import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import ThemeToggler from "./ThemeToggler";
import AppTheme from "../Colors";
import ineuron from "../ineuron_logo.png";
import "../App.css";


const HeroSection = () => {
    const theme = useContext(ThemeContext)[0];
    const changeTheme = useContext(ThemeContext)[1];
    const currentTheme = AppTheme[theme];

    return (
        <div className="HeroSection" style={{ backgroundColor: `${currentTheme.backgroundColor}` }}>

            <div className="navbar">
                <img src={ineuron} height="50px" alt="iNeuron logo" />
                <ThemeToggler />
            </div>

            <div className="logo">
                <img src={ineuron} alt="iNeuron logo" />
            </div>
        </div>
    );
};

export default HeroSection;