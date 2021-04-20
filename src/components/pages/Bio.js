import React from "react";
import "../../App.css";
import Footer from "./Footer";
import LB from "../../images/LB.jpeg";
import "../pages/WideCard.css";

export default function Bio() {
  return (
    <div>
      <div className="pagecontainer">
        <h1 className="bio">ABOUT ME</h1>
        <div className="biocontainer">
          <div className="biocard">
            <img src={LB} alt="LB Bradburn" />
            <p>
              Hi, I'm LB (they/them/theirs), and the above dog is my puzzle
              sidekick, Chili.
              <br></br>
              <br></br>
              I'm a software engineer and teaching fellow who loves spotting
              bugs.
              <br></br>
              Before my developer journey, I was an artist and environmental
              activist. When the pandemic began, I was working as an escape room
              designer for a company in Manhattan. In quarantine, I found I
              could use my artistic skills and drive for solutions to build
              digital projects, and jumped into the Grace Hopper Program at
              Fullstack Academy.
              <br></br>
              <br></br>Now I am a full stack engineer specializing in Javascript
              and the NERD stack. I'm looking to add my strong technical
              abilities to an engineering team, especially one that is
              thoughtful about its ecological impact.
              <br></br>
              <br></br>I have also seen 500+ films. Let's discuss your favorite.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
