import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  HeaderWrapper,
  LightModeIcon,
  DarkModeIcon,
} from "../Header/Header.styled";
import { ReactComponent as Logo } from "../../assets/svg/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <Logo className="logo" onClick={() => navigate("/")} />
      <span onClick={() => toggleTheme()}>
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>
    </HeaderWrapper>
  );
};

export default Header;
