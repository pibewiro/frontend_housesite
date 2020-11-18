import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./css/LandingSection.css";

const LandingSection = () => {
  const [search, setSearch] = useState("buy");
  const [location, setLocation] = useState(null);

  const history = useHistory();
  const handleSearchType = (s, e) => {
    setSearch(s);
    let el = document.querySelector(".btn-selected");
    el.classList.remove("btn-selected");
    e.target.classList.add("btn-selected");
  };

  const handleSearch = async () => {
    if (!location) {
      history.push({
        pathname: "/homes/all",
        state: { type: search, location: "all" },
      });
    } else {
      history.push({
        pathname: `/homes/${location}`,
        state: { type: search, location },
      });
    }
  };

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <div className="LandingSection">
        <div className="ls-overlay">
          <div className="overlay-content">
            <div className="ls-btn-div">
              <button
                className="site-btn-dark btn-selected"
                onClick={handleSearchType.bind(this, "buy")}
              >
                Buy
              </button>
              <button
                className="site-btn-dark"
                onClick={handleSearchType.bind(this, "rent")}
              >
                Rent
              </button>
              <button
                className="site-btn-dark"
                onClick={handleSearchType.bind(this, "sell")}
              >
                Sell
              </button>
            </div>
            <div className="ls-input">
              <input
                type="text"
                placeholder="City, State, or Zipcode"
                className="site-input"
                onChange={handleInput}
              />
              <button
                className="site-btn-dark"
                onClick={handleSearch.bind(this, "buy")}
              >
                Enter
              </button>
            </div>
            <div className="ls-info">
              <h1>Checkout new houses everyday. Amazing houses.</h1>
              <p>
                Houses from all over the USA different cities and states you
                name it you can find it anywhere. All types of houses to bu,
                sell, or rent what eber you are looking for its here. Realators
                or private sellingg available. New Houses and apartment for rent
                and sell posted everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
