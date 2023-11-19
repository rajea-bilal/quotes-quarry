import React from 'react';

const SingleQuote = ({ quote }) => {
  const { id, quote_text, book_title, author_name } = quote;

  const formattedQuote =
    quote_text.length > 100 ? `${quote_text.slice(0, 100)}...` : quote_text;

  return (
    <article className="singleQuote" key={id}>
      <div className="singleQuote-Text">
        <p>{formattedQuote}</p>
      </div>

      <div className="quoteCardInfo">
        <h4>{author_name}</h4>
        <h4>{book_title}</h4>
      </div>
    </article>
  );
};

export default SingleQuote;
