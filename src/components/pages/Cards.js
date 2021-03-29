import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img from "../../images/virtual-realty.png";
import img2 from "../../images/SatHQ.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these epic scenarios for humanity's future!</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
