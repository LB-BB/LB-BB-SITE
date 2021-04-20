import React from "react";
import "../../App.css";
import Footer from "./Footer";
import "./Footer.css";

export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contact-text-container">
          <h1>CONTACT</h1>
          <br></br>
        </div>
        <div className="contact-icon-container">
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/lb-bradburn"
              className="contact-icons"
              target="_blank"
              aria-label="Linkedin"
              rel="noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.github.com/lb-bb"
              className="contact-icons"
              target="_blank"
              aria-label="Github"
              rel="noreferrer"
            >
              <i class="fab fa-github-square"></i>
            </a>
            <a
              className="contact-icons"
              href="href=mailto:bradburnlb@gmail.com"
              target="_blank"
              aria-label="Email"
              rel="noreferrer"
            >
              <i class="fas fa-envelope-square"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
