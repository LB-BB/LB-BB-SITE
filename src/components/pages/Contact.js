import React from "react";
import "../../App.css";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <div className="pagecontainer">
        <h1 className="contact">CONTACT</h1>
        <div className="biocontainer">
          <div className="biocard">
            <p>
              bradburnlb@gmail.com
              <br></br>
              <br></br>
              github.com/lb-bb
              <br></br>
              <br></br>
              linkedin.com/lb-bb
              <br></br>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
