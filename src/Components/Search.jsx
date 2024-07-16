import React, { useState } from "react";
import "../Componentstyle/search.css";

function Search({ setLocation }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(city);
  };

  return (
    <div className="main">
      <nav className="istclass">
        <form className="form" onSubmit={handleSubmit}>
          <div className="search">
            <input
              value={city}
              placeholder="Search your location"
              className="searchbox"
              onChange={(e) => setCity(e.target.value)}
            />

            <button className="nd" type="submit">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Search;
