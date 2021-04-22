import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Tune in to LB Radio for updates on my projects!
        </p>
        <p className="footer-subscription-text">
          Twiddle the dial until you find it, or follow me on GitHub.
        </p>
        <div className="input-areas">
          <form>
            <a
              href="https://github.com/users/follow?target=lb-bb"
              title="Follow lb-bb on Github"
              id="followGithub"
              className="noBg"
            >
              <Button buttonStyle="btn--outline">Follow</Button>
            </a>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            {/* <h2>About Us</h2> */}
            {/* <Link to="/">Sign Up</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo" to="/">
              <i className="fas fa-brain"></i>
            </Link>
          </div>
          <small className="website-rights">
            © Built by LB with React 2021
          </small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/lb.bradburn"
              className="social-icon-link"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/lb_seeing_you/"
              className="social-icon-link"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="social-icon-link"
              href="https://twitter.com/lb_seeing_you"
              target="_blank"
              aria-label="Twitter"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
