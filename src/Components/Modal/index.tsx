import React from "react";
import "./modal.css";

export const Modal = ({ open }: { open: boolean }) => {
  return <div className={`modal-wrapper ${open ? "open" : ""}`}>hi</div>;
};
