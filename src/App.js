import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Screens
import Home from "./screens/Home";
import About from "./screens/About";
import MyWorks from "./screens/MyWorks";
import FAQs from "./screens/FAQs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/myworks" component={MyWorks} />
        <Route path="/faqs" component={FAQs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
