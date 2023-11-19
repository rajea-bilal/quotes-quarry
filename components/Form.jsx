import React from 'react';

const Form = ({ onAdd }) => {
  const [quoteText, setQuoteText] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [bookTitle, setBookTitle] = React.useState('');
  const [category, setCategory] = React.useState([]);

  const handleSubmit = async (event) => {
    console.log('im handling the event');
    event.preventDefault();

    // making a POST request to the server to create a new book in the DB
    const newQuote = { quoteText, author, bookTitle, category };

    const response = await fetch('http://localhost:5000/quotes/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newQuote),
    });

    const json = await response.json();
    const addedQuote = json.data;
    // add the new quote to the list
    onAdd(addedQuote);
    if (response.ok) {
      setQuoteText('');
      setAuthor('');
      setBookTitle('');
      setCategory('');
    }
  };

  return (
    <div className="addQuoteSection">
      <form onSubmit={handleSubmit}>
        <label className="quote-label" htmlFor="quote">
          Add Quote
        </label>
        <textarea
          className="quoteText"
          name="quoteText"
          id="quote"
          placeholder="Add quote"
          value={quoteText}
          onChange={(event) => setQuoteText(event.target.value)}
        />

        <label className="quote-label" htmlFor="quote-author">
          Author
        </label>
        <input
          type="text"
          name="quoteAuthor"
          id="quote-author"
          placeholder="Author"
          value={author}
          className="quoteText"
          onChange={(event) => setAuthor(event.target.value)}
        />

        <label className="quote-label" htmlFor="book">
          Book
        </label>
        <input
          className="quoteText"
          type="text"
          name="book"
          id="book"
          placeholder="Book title"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
        />

        <label htmlFor="quoteCat" className="quote-label">
          Category
        </label>
        <select
          className="quoteText"
          onChange={(event) => setCategory(event.target.value)}
        >
          Category
          <option value="">Select Category</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Religion">Religion</option>
          <option value="Biography">Biography</option>
          <option value="Crime">Crime</option>
          <option value="Romance">Romance</option>
          <option value="History">History</option>
        </select>

        <button type="submit" className="addQuote">
          + Add quote
        </button>
      </form>
    </div>
  );
};

export default Form;
