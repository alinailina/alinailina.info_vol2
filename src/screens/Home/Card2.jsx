import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./index.module.scss";

const Card2 = () => {
  return (
    <div className={`${css.card} ${css.card2}`}>
      <div>
        <h3>Hello</h3>
        <div>
        <p>
          My name is Alina Ilina. I'm a Web Developer and UI Imagineer. I make
          clean, predictable and simply awesome user interfaces for web and
          mobile apps that meet high standards for usability and scale.
        </p>
        <Link>Read full story</Link>
        </div>
      </div>
    </div>
  );
};

export default Card2;
