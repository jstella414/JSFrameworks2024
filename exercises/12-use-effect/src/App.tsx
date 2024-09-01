// Import useEffect here

import { useState, useEffect } from 'react';
import axios from 'axios';

import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)
function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  /**
   * Make an AJAX call with the useEffect hook
   */
  type QuoteResponse = string[];

  const fetchQuotes = async () => {
    // 1. Show loading symbol
    setIsLoading(true);

    try {
      // 2. Make AJAX request
      const { data }  = await axios.get<QuoteResponse>("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
      // 3. Display results
      setQuote(data[0]);
      setIsLoading(false)
    } catch (err) {
      // Or 3. Handle error if there is an error
      console.error(err);
      setHasError(true);
    }

    // 4. Remove loading symbol
    setIsLoading(false);
  };


  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <body className="bg-warning text-center">
        <img
          src={ronSwansonImage}
          alt=""
          width="450"
          height="423"
          className="mt-4"
        />
        <div className="container">
        {isLoading ? <p className="text-primary">Loading ...</p>: null}
          
        {hasError && (
        <div className="alert alert-danger" role="alert">
          <h1>We're sorry, but an unexpected error occurred</h1>
        </div>
      )}
          <blockquote
            id="quote"
            className="blockquote bg-dark text-white border-0 mb-4"
          ><p>{quote}</p>
            <h1></h1>
          </blockquote>
        </div>
      </body>
   </>
  );
}

export default App;
