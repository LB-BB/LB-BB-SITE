import React from "react";
import Button from "./Button";
import "./Hero.css";
import "../App.css";
import { Link } from "react-router-dom";
// import waves from "../videos/waves.mp4";

function Hero() {
  return (
    <div className="hero-container">
      {/* <video src={waves} autoPlay={true} loop muted /> */}
      <h1>From the Primordial Sea</h1>
      <p>Crawls a Software Engineer</p>
      <div className="hero-btns">
        <Link to="/bio">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href="/projects"
          >
            LEARN ABOUT ME
          </Button>
        </Link>
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
        <Link to="/contact">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            href="/projects"
          >
            GET IN TOUCH
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
