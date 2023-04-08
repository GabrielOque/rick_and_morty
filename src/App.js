import axios from "axios";

import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Pagination from "./Pagination";

const App = () => {
  const urlInitial = "https://rickandmortyapi.com/api/character";

  const [results, setResults] = useState([]);
  const [otherPage, setOtherPage] = useState({});

  const characters = (url) => {
    axios
      .get(url)
      .then((response) => {
        setResults(response.data.results);
        setOtherPage(response.data.info);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
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

  const handleDowload = (urlImage) => {
    fetch(urlImage)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "imagen.jpg");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

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
          <Card results={results} handleDowload={handleDowload} />
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
