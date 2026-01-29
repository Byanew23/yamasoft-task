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

export const ItemCard = ({
  card,
  openModal,
}: {
  card: Card;
  openModal: () => void;
}) => {
  return (
    <div className="wrapper" key={card.id}>
      <div className="title">{card.name}</div>
      <img className="card-image" src={card.image}></img>
      <div className="description">{card.description}</div>
      <button className="more-info" onClick={openModal}>
        See more
      </button>
      <div className="rating">
        {card.rating}
        <span className="star">&#9734;</span>
      </div>
    </div>
  );
};
