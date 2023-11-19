import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faWhatsappSquare,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { BiSolidMessageSquareEdit } from 'react-icons/bi'

const SingleQuotePage = () => {
  const [quote, setQuote] = React.useState();
  const [updated, setUpdated] = React.useState(false);

  const [quoteText, setQuoteText] = React.useState('');
  const [authorName, setAuthorName] = React.useState('');
  const [bookTitle, setBookTitle] = React.useState('');
  const [bookId, setBookId] = React.useState('');
  const [catId, setCatId] = React.useState('');
  const [category, setCategory] = React.useState('');

  const baseUrl = 'http://localhost:5000/quotes/';

  const navigate = useNavigate();
  // grab the params from the url
  const urlId = useParams();

  React.useEffect(() => {
    // fetching single quote from the backend
    const fetchQuote = async () => {
      try {
        const response = await fetch(`${baseUrl}${urlId.id}`);

        if (!response.ok) {
          throw new Error('Failed to fetch data.');
        }

        const result = await response.json();
        const quoteObject = result.data[0];
        setQuoteText(quoteObject.quote_text);
        setAuthorName(quoteObject.author_name);
        setBookTitle(quoteObject.book_title);
        setBookId(quoteObject.book_id);
        setCategory(quoteObject.cat_name);
        setCatId(quoteObject.cat_id);

        console.log(result.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuote();
  }, []);

  const handleUpdate = async (event) => {
    event.preventDefault();

    // making a PATCH request to the server to create a new book in the DB
    const quote = { quoteText, authorName, bookTitle, category, bookId, catId };

    const response = await fetch(`${baseUrl}${urlId.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quote),
    });

    const json = await response.json();
    // console.log(json);
    if (response.ok) {
      setQuoteText('');
      setAuthorName('');
      setBookTitle('');
      setCategory('');
    }

    setUpdated(true);
  };

  // delete functionality
  const removeQuote = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${baseUrl}${urlId.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete book');
      }

      const json = await response.json();
      console.log(json);
      console.log('Quote has been removed');
      navigate('/');
    } catch (error) {}
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quoteText
    )} - ${encodeURIComponent(authorName)}`;
    window.open(twitterUrl);
  };

  const shareOnWhatsApp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${quoteText} - ${authorName}`
    )}`;
    window.open(whatsappUrl);
  };

  const shareOnInstagram = () => {
    const instagramUrl = `https://www.instagram.com/?text=${encodeURIComponent(
      quoteText
    )}`;
    window.open(instagramUrl);
  };

  return (
    <>
      {updated && (
        <section className="updateMessageSection">
          <article>
            <div className="updateImageBox">
              <img
                src="../images/update-message.png"
                alt=""
                className="vintageMan"
              />
            </div>

            <Link to={'/'}>
              <button className="btn back-btn">Back</button>
            </Link>
          </article>
        </section>
      )}

      {!updated && (
        <section className="singleQuotePage-section">
          <form className="form" onSubmit={handleUpdate}>
            <label htmlFor="quote-text" className="form-label">
              Quote
            </label>
            <textarea
              id="quote-text"
              rows="5"
              cols="30"
              value={quoteText}
              onChange={(event) => setQuoteText(event.target.value)}
              className="quoteText"
            />

            <label className="form-label">Author</label>
            <input
              type="text"
              value={authorName}
              onChange={(event) => setAuthorName(event.target.value)}
              className="quoteText"
            />

            <label className="form-label">Book Title</label>
            <input
              type="text"
              value={bookTitle}
              onChange={(event) => setBookTitle(event.target.value)}
              className="quoteText"
            />

            <label htmlFor="quoteCat" className="form-label">
              Category
            </label>
            <select
              className="quoteCat"
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">Select Category</option>
              <option value="self-help">Self-Help</option>
              <option value="religion">Religion</option>
              <option value="biography">Biography</option>
              <option value="crime">Crime</option>
              <option value="romance">Romance</option>
              <option value="history">History</option>
            </select>

            <div className="btnContainer">
              <div className="btnBox">
                <button type="submit" className="btn submit-btn">
                  Update
                </button>
                <button type="btn" className="btn" onClick={removeQuote}>
                  Delete
                </button>

                <button className="btn ">
                  <Link
                    to={'/'}
                    style={{ textDecoration: 'none', color: '#f9f8f4' }}
                  >
                    Back
                  </Link>
                </button>
              </div>

              <div className="socialBox">
                <FontAwesomeIcon
                  onClick={shareOnTwitter}
                  icon={faTwitterSquare}
                  className="shareOnSocial"
                />
                <FontAwesomeIcon
                  onClick={shareOnWhatsApp}
                  icon={faWhatsappSquare}
                  className="shareOnSocial"
                />
                <FontAwesomeIcon
                  onClick={shareOnInstagram}
                  icon={faInstagramSquare}
                  className="shareOnSocial"
                />
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default SingleQuotePage;
