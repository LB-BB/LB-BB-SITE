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
              I'm LB, and that's Chili.
              <br></br>
              Pre-pandemic, I designed and built user experiences as an escape
              room creator. My early obsession, however, is environmental
              studies. I found the intersection of artistry and real-world
              problem-solving in software engineering. After training in the
              Grace Hopper Program, I am currently a Teaching Fellow at
              Fullstack Academy. I'm looking to apply my strong technical skills
              to a team that believes not only in their end product, but in
              ensuring the quality of the work from start to finish.
              <br></br>
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
