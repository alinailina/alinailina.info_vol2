import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <nav>
      <div>
        <NavLink to="/">
          <img src={require("../assets/logo.svg")} alt="logo" />
        </NavLink>
      </div>
      <div
        className={active ? "toggle active" : "toggle"}
        onClick={toggleActive}
      >
        <div className="hamburger"></div>
      </div>

      <ul className={active ? "active" : ""}>
      <NavLink
          to="/" exact
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
         Home
        </NavLink>
        <NavLink
          to="about"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          About
        </NavLink>
        <NavLink
          to="myworks"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          My works
        </NavLink>
        <NavLink
          to="faqs"
          onClick={toggleActive}
          activeClassName="active-navlink"
        >
          FAQs
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
