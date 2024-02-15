// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If use litElement base class
import { LitElement, html } from "lit";
import { classMap } from "lit/directives/class-map.js";

import styleCss from "./style-flightline-css.js";

import './auro-flight-segment.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flightline component provides a responsive flight timeline experience by placing dots indicating stopovers and layovers on a timeline.
 * @attr {Boolean} canceled - Whether the flightline is canceled.
 * @slot - fill in with `<auro-flight-segment>` components of a given leg.
 */

export class AuroFlightline extends LitElement {
  constructor() {
    super();
    this.canceled = false;

    /** @private */
    this.hasCanceledSegment = false;

    /** @private */
    this.firstSegmentCanceled = false;

    /** @private */
    this.lastSegmentCanceled = false;
  }

  static get properties() {
    return {
      canceled:    { type: Boolean },
      hasCanceledSegment: { type: Boolean },
      firstSegmentCanceled: { type: Boolean },
      lastSegmentCanceled: { type: Boolean }
    };
  }

  static get styles() {
    return [styleCss];
  }

  /** @private */
  containsCanceledSegment() {
    const segments = this.querySelectorAll('auro-flight-segment');
    for (let idx = 0; idx < segments.length; idx += 1) {
      const segment = segments[idx];
      if (this.canceled) {
        segment.canceled = true;
        segment.destinationCanceled = true;
      }

      if (segment.canceled || segment.hasAttribute('canceled')) {
        this.hasCanceledSegment = true;
        if (idx === 0) {
          this.firstSegmentCanceled = true;
        }
      }

      if (segment.hasAttribute('destinationCanceled') && idx === segments.length - 1) {
        this.lastSegmentCanceled = true;
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const isMultiple = this.children.length > 1;
    const classes = {
      'slotContainer': true,
      'nonstop': !this.children.length,
      'multiple': isMultiple,
      'canceled': this.canceled
    };

    return html`
      <div class="${classMap(classes)}">
        <slot @slotchange=${this.containsCanceledSegment}></slot>
        ${isMultiple ? html`
          <auro-flight-segment
            class="showNoStops"
            ?canceled=${this.firstSegmentCanceled}
            ?partialCancel=${this.hasCanceledSegment}
            ?destinationCanceled=${this.lastSegmentCanceled}
            iata="${this.children.length} stops"
          ></auro-flight-segment>
        ` : html``}
      </div>`;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-flightline")) {
  customElements.define("auro-flightline", AuroFlightline);
}
