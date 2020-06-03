import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Card from "./Card";
import { css } from "@emotion/core";

const App = () => {
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCharacters(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <React.StrictMode>
      <div
        css={css`
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;
          margin-top: 100px;
          margin-left: 50px;
          margin-right: 50px;
        `}
      >
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[0]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[1]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[2]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[0]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[1]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[2]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[0]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[1]}
            alt={"Character image"}
          />
        ))}
        {characters.map((character, i) => (
          <Card
            key={character.fname}
            src={character.images[2]}
            alt={"Character image"}
          />
        ))}
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
