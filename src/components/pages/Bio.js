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
              room creator. I earned my undergrad degree in sustainability and
              environmental studies.
              <br></br>
              <br></br>I found the intersection of artistry and real-world
              problem-solving when I became a software engineer. After training
              in the Grace Hopper Program, I entered their Teaching Fellowship
              and am currently mentoring junior engineers.
              <br></br>
              <br></br>
              I'm looking for a team that believes not only in their end
              product, but in ensuring the quality of the work from start to
              finish. As an escape room champ, I care a lot about details.
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
