import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";

const url = "https://api.quotable.io/random";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };



  const { content, author } = quotes;
  return (
    <Container>
      <div className="box-centerside">
        <div className="text">
          <p>{content}</p>
        </div>
        <div className="author">
          <h5>{author}</h5>
          <div className="button-container">
            <Button variant="success" size="lg" onClick={getNewQuote}  >New Quote </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Quotes;