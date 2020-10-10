import React from "react";

// Children
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Colors from "./Colors";

// Styles
//import css from "./index.module.scss";

const Home = () => {
  return (
    <div>
      <Card1 />
      <Card2 />
      <Card3 />
      <Colors />
      <Card4 />
    </div>
  );
};

export default Home;
