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
              I'm LB, and the above dog is Chili.
              <br></br>
              <br></br>
              Pre-pandemic, I designed and built user experiences as an escape
              room creator. (Hint for when they reopen: colors always mean
              something!)
              <br></br>
              <br></br>When I went looking for an intersection of artistry and
              problem-solving that could be done in quarantine, I found software
              engineering. I became a developer in the Grace Hopper Program at
              Fullstack Academy, where I trained in with Javascript, Git, and
              numerous libraries including React. I earned a spot in Fullstack's
              Teaching Fellowship after graduationg, and I currently mentor
              junior engineers.
              <br></br>
              <br></br>I have also studied sustainability, and it remains an
              important interest of mine. It is my hope to one day apply my
              engineering skills to an aspect of marine ecology (hence, the
              website theme).
              <br></br>
              <br></br>
              For now, I'm looking for a team that believes not only in their
              end product, but in ensuring the quality of the work from start to
              finish. As an escape room champ, I care a lot about details.
              <br></br>
              <br></br>
              <br></br>I have also seen 500+ films. Let's discuss your favorite!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
