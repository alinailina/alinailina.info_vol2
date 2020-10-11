import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./index.module.scss";

const MyWorks = () => {
  return (
    <div className={css.myWorks}>
      <div>
        <Link to='myworks'>My works</Link>
      </div>
    </div>
  );
};

export default MyWorks;
