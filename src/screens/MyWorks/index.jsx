import React from "react";
import { Link } from "react-router-dom";

// Children
import Header from "../../components/Header";

// Styles
import css from "./index.module.scss";

const Portfolio = () => {
  return (
    <div className={css.container}>
      <Header title="My works" />
      <section>
        <p>
          Something interesting is cooking here. Come back in a bit, or get
          notified when this page is ready!
        </p>
        <form name="get-update" method="post">
          <input type="hidden" name="form-name" value="get-update" />{" "}
          <label>
            Your email:
            <input type="email" name="email" required />
          </label>
          <div>
            <input type="submit" value="Send" />
          </div>
        </form>
        <p>
          In the meantime, check out my{" "}
          <a
            href="https://github.com/alinailina"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          to see what I've been up to, or my <Link to="/faq">FAQ</Link> page to
          find how I can be of service for you today.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
