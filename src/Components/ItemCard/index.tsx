import React from "react";
import "./itemCard.css";

export interface Card {
  id: number;
  name: string;
  image: string;
  description: string;
  long_description: string;
  rating: number;
}

export interface Cards {
  trips: Card[];
}

export const ItemCard = ({ card }: { card: Card }) => {
  return (
    <div className="wrapper" key={card.id}>
      <div className="title">{card.name}</div>
      <img className="card-image" src={card.image}></img>
      <div className="description">{card.description}</div>
      <div className="rating">
        {card.rating}
        <span className="star">&#9734;</span>
      </div>
    </div>
  );
};
