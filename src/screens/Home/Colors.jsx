import React from "react";

// Styles
import css from "./index.module.scss";

const Colors = () => {
  return (
    <div className={css.colors}>
      <div>
        <h3>Brand colors</h3>
        <ul>
          <li>
            <p>#000000</p>
          </li>
          <li>
            <p>#FEF000</p>
          </li>
          <li>
            <p>#F2F2F2</p>
          </li>
          <li>
            <p>#FEBECC</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Colors;
