// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import "@alaskaairux/auro-badge";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-segment-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight-segment is a standard for indicating stopovers and layovers.
 * Stopovers do not have duration information and are indicated differently.
 * Layovers contain duration information and are indicated with a solid fill.
 * For more information about the difference between a layover and a stopover,
 * [please see this article.](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/)
 *
 * @attr {Boolean} stopover - Indicates a stopover. Do not provide duration.
 * @attr {String} iata - Text to display, typically a station code (SEA, PVD, AVP)
 * @attr {String} duration - Displayed in the auro-badge, typically duration (1h 53m)
 */

class AuroFlightSegment extends LitElement {
  constructor() {
    super();
    this.stopover = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      stopover:   { type: Boolean },
      iata:       { type: String },
      duration:   { type: String },
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const legClasses = {
      'leg': true,
      'layout': true,
      'leg--stopover': this.stopover
    };

    return html`
      <div class="layout">
        <slot></slot>
        <div class="${classMap(legClasses)}"></div>
        <span class="iata">${this.iata}</span>
        ${this.duration ? html`
            <auro-badge label>
              ${this.duration} 
              <span class="util_displayHiddenVisually"> layover</span>
            </auro-badge>
        ` : html``}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flight-segment")) {
  customElements.define("auro-flight-segment", AuroFlightSegment);
}
