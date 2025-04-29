// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

// If use litElement base class
import { LitElement, css } from "lit";
import { html } from 'lit/static-html.js';
import { classMap } from "lit/directives/class-map.js";

import styleCss from "./style-flight-segment-css.js";
import colorCss from "./color-segment-css.js";
import tokensCss from "./tokens-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-segment component is a standard for indicating stopovers and layovers.
 * Stopovers do not have duration information and are indicated differently.
 * Layovers contain duration information and are indicated with a solid fill.
 * For more information about the difference between a layover and a stopover,
 * [please see this article.](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).
 *
 * @attr {Boolean} stopover - Indicates a stopover. Do not provide duration.
 * @attr {Boolean} nextDay - Indicates time is on the following calendar day.
 * @attr {String} iata - Text to display, typically a station code (SEA, PVD, AVP)
 * @attr {String} duration - Indicates time duration of a stop
 * @attr {Boolean} canceled - Whether the segment is canceled. The line leading to the segment will be red.
 * @attr {Boolean} destinationCanceled - Whether the following segment is canceled, will only affect the last segment in a flightline. The line after the segment will be red.
 */

export class AuroFlightSegment extends LitElement {
  constructor() {
    super();
    this.stopover = false;
    this.canceled = false;
    this.destinationCanceled = false;

    /**
     * @private
     */
    this.partialCancel = false;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      stopover: {
        type: Boolean,
        reflect: true
      },
      nextDay: {
        type: Boolean,
        reflect: true
      },
      iata:       { type: String },
      duration:   { type: String },
      canceled:   {
        type: Boolean,
        reflect: true
      },
      destinationCanceled: {
        type: Boolean,
        reflect: true
      },
      partialCancel: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      css`${styleCss}`,
      css`${colorCss}`,
      css`${tokensCss}`
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-flightline"] - The name of element that you want to register to.
   *
   * @example
   * AuroFlightSegment.register("auro-flight-segment") // this will register this element to <auro-flight-segment/>
   *
   */
  static register(name = "auro-flight-segment") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFlightSegment);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-flight-segment');
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const legClasses = {
      'leg': true,
      'layout': true,
      'leg--stopover': this.stopover,
      'leg--canceled': this.canceled || this.partialCancel
    };

    return html`
      <div class="wrapper">
        <div class="layout">
          <slot></slot>
          <div class="${classMap(legClasses)}"></div>
          <span class="iata">${this.iata}</span>
          ${this.duration ? html`<span class="duration">${this.duration}</span>` : undefined}
        </div>
      </div>
    `;
  }
}
