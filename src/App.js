import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Pagination from "./Pagination";

const App = () => {
  const urlInitial = "https://rickandmortyapi.com/api/character";

  const [results, setResults] = useState([]);
  const [otherPage, setOtherPage] = useState({});

  const characters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setOtherPage(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    characters(otherPage.prev);
  };

  const onNext = () => {
    characters(otherPage.next);
  };

  useEffect(() => {
    characters(urlInitial);
  }, []);

  return (
    <>
      <Navbar brand="rick and morty by @Gabriel Oquendo" />
      <Pagination
        onPrev={onPrev}
        onNext={onNext}
        prev={otherPage.prev}
        next={otherPage.next}
      />
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-around w-11/12">
          <Card results={results} />
        </div>
      </div>
      <Pagination
        onPrev={onPrev}
        onNext={onNext}
        prev={otherPage.prev}
        next={otherPage.next}
      />
    </>
  );
};

export default App;
