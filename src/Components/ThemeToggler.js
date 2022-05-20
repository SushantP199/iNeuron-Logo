import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import { RiSunLine, RiMoonClearFill } from "react-icons/ri";

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);
    const currentTheme = AppTheme[themeMode];

    return (
        <div className="ThemeToggler"
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
            <span
                className="Icon"
                style={{ color: `${currentTheme.foregroundColor}` }}
            >
                {themeMode === "light" ? <RiMoonClearFill /> : <RiSunLine />}
            </span>
            <p className="P" style={{ color: `${currentTheme.foregroundColor}` }}>
                {themeMode === "light" ? "Light Mode" : "Dark Mode"}
            </p>
        </div>
    );
};

export default ThemeToggler;