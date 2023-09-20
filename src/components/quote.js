import React, { useState, useEffect } from 'react';
import Header from './header';

function Quote() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'bTl8uVAgaR//hOsPx6GQtw==526OXzQjzWLrvuSJ'; // Replace with your actual API key
  const category = 'happiness'; // Change to the desired category

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}&limit=1`, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].quote);
        } else {
          setQuote('No quotes available for this category.');
        }

        setLoading(false);
        setError(null);
      } catch (err) {
        setError('An error occurred while fetching the quote.');
        setLoading(false);
      }
    };

    fetchQuote();
  }, [category, apiKey]);
  const quoteStyle = {
    fontSize: '24px',
  };

  return (
    <div className="quote-container">
      <Header />
      {loading && <div className="loading-message">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {quote && <div className="quote" style={quoteStyle}>{quote}</div>}
    </div>
  );
}

export default Quote;
