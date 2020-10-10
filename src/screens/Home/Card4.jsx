import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./index.module.scss";

const Card4 = () => {
  return (
    <div className={`${css.card} ${css.card4}`}>
      <div> 
      <Link to='faqs'>FAQs</Link>
      </div>
    </div>
  );
};

export default Card4;
