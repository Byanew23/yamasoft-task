import React from "react";
import { Card } from "../ItemCard";
import { Image } from "../Image";
import "./modal.css";

export const Modal = ({
  open,
  card,
  handleClose,
}: {
  open: boolean;
  card?: Card;
  handleClose: () => void;
}) => {
  return (
    <div
      className={`modal-wrapper ${open ? "open" : ""}`}
      onClick={handleClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <Image src={card?.image} className="modal-image" name={card?.name} />
        <div className="close" onClick={handleClose}>
          x
        </div>
        <div className="name">{card?.name}</div>
        <div className="description">{card?.long_description}</div>
      </div>
    </div>
  );
};
