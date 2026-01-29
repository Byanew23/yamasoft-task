import React, { useEffect, useState } from "react";
import { ItemCard, Cards } from "../ItemCard";
import { useGetData } from "../../hooks";
import "./landingPage.css";

export const LandingPage = () => {
  const { data, loading } = useGetData();
  const [currentData, setCurrentData] = useState<Cards>({ trips: [] });
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  return (
    <>
      <div className="top-bar">
        <div className="search-comp">
          <span className="glass">&#x1F50E;</span>
          <input
            className="search-box"
            onChange={(e) => setSearchTerm(e.target.value)}></input>
        </div>
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
