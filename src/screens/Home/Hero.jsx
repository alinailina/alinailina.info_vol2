import React from "react";
import { Link } from "react-router-dom";

// Styles
import css from "./index.module.scss";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div>
      <div>
        <div>
          <h2>Hello,</h2>
          <p>My name is Alina Ilina.</p>
          <p>
            I'm a Web Developer and UI Imagineer. I make clean, predictable and
            simply awesome user interfaces for web and mobile apps that meet
            high standards for usability and scale.
          </p>
          <div>
            <Link to='about'>Read full story</Link>
            <a href='mailto:alinailina.random@gmail.com?subject=Hire Alina'>Hire me</a>
          </div>
        </div>
        <div>
          {/* <img src={require("")} alt="" /> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;
