import React, { useEffect, useState } from "react";
import Navbar from "../NavbarComponent/Navbar";
import quotesData from "./quotes";
import "./Quotes.css";

function Quotes() {
  return (
    <div className="quotes-container">
      <Navbar />
      <h2 className="quotes-heading">Inspirational- Food - Quotes</h2>
      <ul className="quotes-list">
        {quotesData.map((quote) => (
          <li key={quote.id} className="quote-item">
            <blockquote className="quote-text">"{quote.text}"</blockquote>
            <p className="quote-author">- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
