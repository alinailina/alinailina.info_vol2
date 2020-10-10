import React from "react";
import "./index.scss";

// Children
import Header from "../../components/Header";
import Acc from "./Acc";
import Form from "./Form";

const FAQ = () => {
  return (
    <div className="faq">
      <Header title="FAQs" />
      <Acc />
      <section className="form">
        <h3>Ask me anything</h3>
        <p>
          Your question not answered yet? Help me improve this page &mdash; ask
          away in the form down below.
        </p>
        <Form />
      </section>
    </div>
  );
};

export default FAQ;
