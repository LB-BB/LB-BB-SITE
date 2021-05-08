import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import img from "../../images/virtual-realty.png";
import img2 from "../../images/SatHQ.png";
import img3 from "../../images/webcam.jpeg";
import img4 from "../../images/neural.png";
import CardPage from "./CardPage";

const satDescrip = "This is the description of Satellite HQ.";

const virtualDescrip = "This is the description of Virtual Realty.";

const brainDescrip = "This is the description of BrainJs.";

const webcamDescrip = "This is the description of Tensorflow webcam.";

function Cards() {
  const openPopup = (e) => {
    //openPopup brings up the cardPage with props
    //render this CardPage as a popup
    <CardPage
      src={e.target.src}
      text={e.target.text}
      label={e.target.label}
      outerLink={e.target.outerLink}
      description={e.target.description}
    />;
  };

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <div className="cards__items">
            <CardItem
              src={img2}
              text="Satellite HQ -- Virtual Office"
              label="Satellite HQ"
              outerLink="https://satellite-hq.herokuapp.com/"
              onClick={openPopup}
              description={satDescrip}
            />
            <CardItem
              src={img}
              text="Virtual Realty -- eCommerce Property Site"
              label="Virtual Realty"
              href="https://virtual-realty.herokuapp.com/home"
              description={virtualDescrip}
            />
          </div>
          <div className="cards__items">
            <CardItem
              src={img3}
              text="Smart Webcam-- Tensorflow.js"
              label="Smart Webcam"
              href="https://github.com/LB-BB/tensorflowjs-smart-webcam"
              description={webcamDescrip}
            />
            <CardItem
              src={img4}
              text="Neural Networks with Brain.js"
              label="Neural Networks"
              href="https://github.com/LB-BB/BrainJS"
              description={brainDescrip}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
