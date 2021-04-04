import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img from "../../images/virtual-realty.png";
import img2 from "../../images/SatHQ.png";
import img3 from "../../images/webcam.jpeg";
import img4 from "../../images/neural.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my creations and experiments.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src={img2}
              text="Satellite HQ -- Virtual Office"
              label="Satellite HQ"
              path="/satellite-hq"
            />
            <CardItem
              src={img}
              text="Virtual Realty -- eCommerce Property Site"
              label="Virtual Realty"
              path="/virtual-realty"
            />
            <CardItem
              src={img3}
              text="Smart Webcam-- Tensorflow.js"
              label="Smart Webcam"
              path="/smart-webcam"
            />
            <CardItem
              src={img4}
              text="Neural Networks with Brain.js"
              label="Neural Networks"
              path="/neural-networks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
