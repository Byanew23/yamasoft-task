import React, { useEffect } from "react";
import { ItemCard } from "../ItemCard";
import { useGetData } from "../../hooks";
import "./landingPage.css";

export const LandingPage = () => {
  const { data, loading } = useGetData();

  return (
    <div className="body">
      {data.trips.map((card) => {
        return <ItemCard card={card} />;
      })}
    </div>
  );
};
