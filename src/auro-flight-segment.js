// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import "@alaskaairux/auro-badge";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flight-segment-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flight-segment is a standard for indicating stopovers and layovers.
 * Stopovers do not have duration information and are indicated white.
 * Layovers contain duration information and are indicated blue.
 * https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/
 *
 * @attr {Boolean} stopover - Indicates a stopover. Do not provide duration.
 * @attr {String} iata - text to display, typically a station code (SEA, PVD, AVP)
 * @attr {String} duraton - displayed in the badge, typically duration (1h 53m)
 */

// build the component class
class AuroFlightSegment extends LitElement {
  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      stopover:   { type: Boolean },
      iata: {type: String},
      duration: {type: String},
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="${this.stopover ? 'stopover-container' : ''}">
        <slot></slot>
        <div class="circle ${this.stopover ? 'stopover' : ''}"></div>
        <span>${this.iata}</span>
        ${this.duration ? html`
            <auro-badge label>${this.duration}</auro-badge>
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
