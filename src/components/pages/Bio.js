import React from "react";
import "../../App.css";
import Footer from "./Footer";
import LB from "../../images/LB.jpeg";
import "../pages/Cards.css";

export default function Bio() {
  return (
    <div>
      <div className="pagecontainer">
        <h1 className="bio">ABOUT ME</h1>
        <div className="biocontainer">
          <div className="biocard">
            <img src={LB} alt="LB Bradburn" />
            <p>
              Hi, I'm LB (they/them/theirs).
              <br></br>
              <br></br>
              I'm a software engineer and teaching fellow who loves spotting
              bugs.
              <br></br>
              Pre-pandemic, I designed and built escape rooms for a company in
              Manhattan. Stuck at home, I leapt at the opportunity to learn how
              to design and build projects digitally. <br></br>
              <br></br>Now I am a full stack developer specializing in
              Javascript and the NERD stack. I'm looking to add my strong
              technical abilities and obsession with solutions to an engineering
              team.
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
