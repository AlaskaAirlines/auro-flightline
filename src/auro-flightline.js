// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html, css } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-flightline-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-flightline provides users a way to ...
 *
 * @attr {String} cssClass - Applies designated CSS class to DOM element.
 */

// build the component class
class AuroFlightline extends LitElement {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      // ...super.properties,
      cssClass:   { type: String }
    };
  }

  firstUpdated() {
    const children = this.shadowRoot.querySelector('slot').assignedNodes().filter(node => node.nodeName === 'AURO-FLIGHT-SEGMENT');

    if(children.length === 0) {
      const el = document.createElement('span');
      el.style = 'color: transparent;';
      el.innerHTML = 'nonstop';
      this.appendChild(el);
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      <div class="flightline-container">
        <span class="slot-container">
          <slot>
            <auro-flight-segment stub iata="${this.children.length} stop${this.children.length > 1 ? 's' : ''}"></auro-flight-segment>
          </slot>
        </span>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flightline")) {
  customElements.define("auro-flightline", AuroFlightline);
}
