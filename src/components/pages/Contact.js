import React from "react";
import "../../App.css";
import Footer from "./Footer";
import "./Footer.css";

export default function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-text-container">
          <h1>CONTACT</h1>
        </div>
        <div className="contact-icon-container">
          <a
            href="https://www.linkedin.com/in/lb-bradburn"
            className="contact-icons"
            target="_blank"
            aria-label="Linkedin"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.github.com/lb-bb"
            className="contact-icons"
            target="_blank"
            aria-label="Github"
            rel="noreferrer"
          >
            <i className="fab fa-github-square"></i>
          </a>
          <a
            className="contact-icons"
            href="mailto:bradburnlb@gmail.com"
            target="_blank"
            aria-label="Email"
            rel="noreferrer"
          >
            <i className="fas fa-envelope-square"></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
