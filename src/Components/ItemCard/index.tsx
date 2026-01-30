import React, { useState, useEffect } from "react";
import { Modal } from "../Modal";
import { Image } from "../Image";
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
  const [src, setSrc] = useState<string>(card.image);
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    const page = document.getElementsByTagName("html")[0];
    if (openModal) {
      page.style.overflow = "hidden";
    } else {
      page.style.overflow = "visible";
    }
  }, [openModal]);

  return (
    <>
      <Modal
        open={openModal}
        card={card}
        handleClose={() => setOpenModal(false)}
      />
      <div className="wrapper" key={card.id}>
        <div className="title">{card.name}</div>
        <Image name={card.name} src={card.image} className="image" />
        <div className="description">{card.description}</div>
        <button className="more-info" onClick={() => setOpenModal(true)}>
          See more
        </button>
        <div className="rating">
          {card.rating}
          <span className="star">&#9734;</span>
        </div>
      </div>
    </>
  );
};
