import React, { useState } from "react";
import CardPage from "./CardPage";
// import { Link } from "react-router-dom";

export default function CardItem(props) {
  const [open, setOpen] = useState(false);

  const openPopup = (e) => {
    console.log("I opened!");
    setOpen(!open);
    if (open) {
      <CardPage
        src={e.target.src}
        text={e.target.text}
        label={e.target.label}
        outerLink={e.target.outerLink}
        description={e.target.description}
      />;
    }
  };

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link" onClick={openPopup}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="" className="cards__item__img"></img>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
      </li>
    </>
  );
}
