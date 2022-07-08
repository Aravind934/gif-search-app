import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { Gif } from "./Gif";
import "./App.scss";

function App() {
  const [searchError, setSearchError] = useState();
  const [result, setResult] = useState();
  const [searchText, setSearchText] = useState();

  console.log(result);

  useEffect(() => {
    (async () => {
      if (searchText) {
        try {
          let baseUrl = `https://tenor.googleapis.com/v2/search?q=${searchText}%20&key=AIzaSyCy5aOg4fZHOvvRwIHbEm4Fh_CfFA8myx4&client_key=my_test_app&limit=5`;
          await fetch(`${baseUrl}`)
            .then((res) => res.json())
            .then((response) => {
              if (response && response.results && response.results.length < 1) {
                setSearchError("couldn't get result");
              }
              setResult(response.results);
              setSearchError("");
            });
        } catch (error) {
          console.log(error);
          setSearchError(`Couldn't retrieve data.`);
        }
      }
    })();
  }, [searchText]);

  return (
    <div className="app-container">
      <h1>Awesome Gif's Container</h1>
      <Search setSearchText={(text) => setSearchText(text)} />
      <div className="search__errors">{searchError}</div>
      <div className="gif">
        {result && result.map((o) => <Gif result={o} key={o.id} />)}
      </div>
    </div>
  );
}

export default App;
