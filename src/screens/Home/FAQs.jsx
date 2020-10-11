import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./index.module.scss";

const FAQs = () => {
  return (
    <div className={css.faqs}>
      <div>
        <Link to="faqs">FAQs</Link>
        <p>Glad you asked ...</p>
      </div>
    </div>
  );
};

export default FAQs;
