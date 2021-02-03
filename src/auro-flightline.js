// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";
import { classMap } from "lit-html/directives/class-map";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flightline-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flightline provides a responsive flight timeline experience by placing
 * dots indicating stopovers and layovers on a timeline.
 *
 * @slot default - fill in with <auro-flight-segment>s of a given leg.
 */

// build the component class
class AuroFlightline extends LitElement {

  firstUpdated() {
    // children is an array of auro-flight-segments from within your <slot> below.
    const children = this.shadowRoot.querySelector('slot').assignedNodes().
filter((node) => node.nodeName === 'AURO-FLIGHT-SEGMENT');

    // if we have a nonstop flight, we need to force _something_ into the dom
    // since we are using pseudoclasses to draw the connector line.
    if (!children.length) {
      const el = document.createElement('span');
      // hack to get something substantial into the DOM to spawn the ::before

      el.style = 'color: transparent;font-size:0px;';
      el.innerHTML = '.';
      this.shadowRoot.querySelector('div').appendChild(el);
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }


  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const ONE = 1,
     classes = {
      'nonstop': !this.children.length,
      'single': this.children.length === ONE,
      'multiple': this.children.length > ONE,
      'slot-container': true,
    }


return html`
      <div class="${classMap(classes)}">
        <slot></slot>
        ${this.children.length > ONE ? html`
          <auro-flight-segment iata="${this.children.length} stop${this.children.length > ONE ? 's' : ''}"></auro-flight-segment>
        ` : html``}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flightline")) {
  customElements.define("auro-flightline", AuroFlightline);
}
