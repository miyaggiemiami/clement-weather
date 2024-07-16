import React, { useState, useEffect } from "react";
import "./App.css";
import Maindata from "./Components/Maindata";
import Search from "./Components/Search";

function App() {
  const [location, setLocation] = useState();
  const [backgroundImageURL, setBackgroundImageURL] = useState("01n");

  useEffect(() => {
    document.body.style.backgroundImage = `url("./pics/${backgroundImageURL}.jpg")`;
  }, [backgroundImageURL]);

  const handle = (e) => {
    setBackgroundImageURL(e);
  };

  return (
    <div className="mainpage">
      <div className="searchComp">
        <Search {...{ location, setLocation }} />
      </div>
      <Maindata city={location} setBackgroundImageURL={handle} />
    </div>
  );
}

export default App;
