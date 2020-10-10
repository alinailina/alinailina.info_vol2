import React from "react";

// Styles
import css from "./index.module.scss";

const Card1 = () => {
  return (
    <div className={`${css.card} ${css.card1}`}>
      <div>
      <div>
        <p>Web Developer</p>
        <p>UI Imagineer</p>
        <div>
          <div>
            <h1>Alina Ilina</h1>
            <button>Hire me</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card1;
