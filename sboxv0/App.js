import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // typically we would do const [color, setColor] = useState("darkblue") but now we will
  // assign the entire array to themeHook
  const [backgroundColor, setbackgroundColor] = useState("peru");
  const [textColor, setTextColor] = useState("pink");
  const themeHook = {
    background: [backgroundColor, setbackgroundColor],
    text: [textColor, setTextColor],
  };
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ themeHook }}>
        <div>
          <header>
            <Link to="/">Adpot Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
