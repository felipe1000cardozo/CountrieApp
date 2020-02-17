import React, { useState, Fragment, useEffect } from "react";
import { FiMoon } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

import LightTheme from "../../styles/light";
import DarkTheme from "../../styles/dark";

import { HeaderContainer } from "./styles";

const Header = () => {
  const [dark, setDark] = useState(true);

  //Load last theme used from localStorage
  useEffect(() => {
    const themeStorage = localStorage.getItem("theme");
    if (themeStorage) {
      setDark(JSON.parse(themeStorage));
    }
  }, []);
  //Save theme on localStorage
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);
  return (
    <>
      {dark ? <DarkTheme /> : <LightTheme />}
      <HeaderContainer>
        <h1>Where in the world?</h1>

        <button onClick={() => (dark ? setDark(false) : setDark(true))}>
          {dark ? (
            <Fragment>
              <FiMoon size={17} /> Dark Mode
            </Fragment>
          ) : (
            <Fragment>
              <FaMoon size={15} /> Light Mode
            </Fragment>
          )}
        </button>
      </HeaderContainer>
    </>
  );
};

export default Header;
