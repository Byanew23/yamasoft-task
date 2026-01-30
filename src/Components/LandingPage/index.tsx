import React, { useEffect, useState } from "react";
import { ItemCard, Cards, Card } from "../ItemCard";
import { Modal } from "../Modal";
import { useGetData } from "../../hooks";
import "./landingPage.css";

export const LandingPage = () => {
  const { data, loading } = useGetData();
  const [currentData, setCurrentData] = useState<Cards>({ trips: [] });
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortDir, setSortDir] = useState<string>("");

  useEffect(() => {
    if (!loading) {
      setIsFetching(loading);
      setCurrentData(data);
    }
  }, [loading]);

  useEffect(() => {
    if (!searchTerm) {
      setCurrentData(data);
    }
    let temp: Cards = { trips: [] };
    temp.trips = data.trips.filter((el) => {
      return el.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setCurrentData(temp);
  }, [searchTerm]);

  useEffect(() => {
    let temp: Card[];
    if (sortDir == "U") {
      temp = currentData.trips.sort((a, b) => b.rating - a.rating);
    } else {
      temp = currentData.trips.sort((a, b) => a.rating - b.rating);
    }
    setCurrentData({ trips: temp });
  }, [sortDir]);

  const handleSort = () => {
    if (!sortDir) {
      setSortDir("U");
    } else if (sortDir == "U") {
      setSortDir("D");
    } else {
      setSortDir("U");
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="search-comp">
          <span className="glass">⌕</span>
          <input
            name="search"
            className="search-box"
            onChange={(e) => setSearchTerm(e.target.value)}></input>
        </div>
        <span className="sort" onClick={() => handleSort()}>
          <img
            className="sort"
            src="https://getdrawings.com/vectors/funnel-icon-vector-1.png"></img>
          <p className="sort-text">Sort by Rating</p>
          {sortDir && (
            <p className="sort-direction">{sortDir == "D" ? `↓` : `↑`}</p>
          )}
        </span>
      </div>
      <div className="body">
        {isFetching ? (
          <div>Loading...</div>
        ) : (
          currentData.trips.map((card) => {
            return <ItemCard key={card.id} card={card} />;
          })
        )}
      </div>
    </>
  );
};
