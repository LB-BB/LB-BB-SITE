import React from "react";
import Button from "./Button";
import "./Hero.css";
import "../App.css";
import { Link } from "react-router-dom";
import waves from "../videos/waves.mp4";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src={waves} autoPlay={true} loop muted /> */}
      <h1>From the Primordial Goo</h1>
      <p>Comes a Human Software Engineer</p>
      <div className="hero-btns">
        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href="/projects"
          >
            SEE MY PROJECTS
          </Button>
        </Link>
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
