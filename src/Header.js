import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div id="header">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <img id="header-image" src="images/monster.png"></img>
      <h1 id="header-text">Mortgage Boss</h1>
    </div>
  );
};

export default Header;
