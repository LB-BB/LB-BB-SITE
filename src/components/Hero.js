import React from "react";
import Button from "./Button";
import "./Hero.css";
import "../App.css";
import trees from "../videos/trees.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video src={trees} autoPlay={true} loop muted />
      <h1>From the Primordial Goo</h1>
      <p>Comes a Human Software Engineer</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET IN TOUCH
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          FLOATING SUPERBRAINS <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default Hero;
