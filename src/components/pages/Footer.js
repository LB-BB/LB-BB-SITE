import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Tune in to S.0.S. radio when everything goes pear-shaped!
        </p>
        <p className="footer-subscription-text">
          Twiddle the dial until you find it.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-links-wrapper">
          <div className="footer-link-items">
            {/* <h2>About Us</h2> */}
            {/* <Link to="/sign-up">Sign Up</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
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
              aria-label="Faceook"
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
              <i class="fab fa-instagram"></i>
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
