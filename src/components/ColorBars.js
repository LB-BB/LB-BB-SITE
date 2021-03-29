import React, { Component } from "react";
import "./ColorBars.css";

export class ColorBars extends Component {
  render() {
    return (
      <div class="container">
        <div class="github">
          <div class="title">
            <h1>Bars</h1>
            <p class="desktop">Hover the bars to fill'em (:</p>
            <p class="mobile">Touch the bars to fill'em (:</p>
          </div>
          <a
            class="github-button"
            href="https://github.com/lucagez/bars"
            data-size="large"
            data-show-count="true"
            aria-label="Star lucagez/bars on GitHub"
          >
            Star
          </a>
        </div>
        <div class="progress">
          <div class="bar shadow overlap"></div>
        </div>
        <div class="progress">
          <div class="bar shadow leaf"></div>
        </div>
      </div>
    );
  }
}

export default ColorBars;
