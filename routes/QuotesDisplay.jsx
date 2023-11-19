import React from 'react';
import { Link } from 'react-router-dom';
import SingleQuote from '../components/SingleQuoteCard';

const QuotesDisplay = ({ setQuotesArray, quotesArray }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const baseUrl = 'http://localhost:5000/quotes';

  React.useEffect(() => {
    // fetching quotes from the backend
    const fetchQuotes = async () => {
      try {
        // console.log(url)
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }

        const result = await response.json();
        const resultData = result.data;
        // console.log(resultData);
        setQuotesArray(resultData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchQuotes();
  }, []);

  return (
    <>
      <section className="containerBottom">
        <h2>Quotes</h2>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <ul className="quotesDisplaySection">
            {quotesArray?.map((quote) => {
              const { id, quote_text, book_title, author } = quote;
              return (
                <Link to={`/quotes/${id}`} key={id} className="quoteLink">
                  <SingleQuote quote={quote} />
                </Link>
              );
            })}
          </ul>
        )}

        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default QuotesDisplay;
