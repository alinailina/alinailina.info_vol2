import React from "react";
import "./index.scss";

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;