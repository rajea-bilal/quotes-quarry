import React from 'react';
import Form from './Form';

const HeroSection = ({ onAdd }) => {
  return (
    <section className="containerTop">
      <div className="quoteInfo">
        <h2>Inspiring words to lighten your path</h2>
        <p className="quote">"Your identity emerges out of your habits"</p>
        <h4 className="author">James Clear</h4>

        {/* <div className="searchQuotesSection">
                            <button type="button" className="btn getQuoteBtn">Random Quote</button>
                            <button type="button" className="btn searchBtn">Search</button>
                            <input type="text" placeholder="Search..." className="searchInput" />
                        </div> */}
      </div>
      <Form onAdd={onAdd} />
    </section>
  );
};

export default HeroSection;
