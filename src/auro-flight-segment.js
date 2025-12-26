// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable lit/binding-positions, lit/no-invalid-html */

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { css, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { html } from "lit/static-html.js";
import colorCss from "./styles/color-segment.scss";
import styleCss from "./styles/style-flight-segment.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-flight-segment component is a standard for indicating stopovers and layovers.
 * @customElement auro-flight-segment
 * 
 * Stopovers do not have duration information and are indicated differently.
 * Layovers contain duration information and are indicated with a solid fill.
 * For more information about the difference between a layover and a stopover,
 * [please see this article](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).
 */

export class AuroFlightSegment extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
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
      /**
       * Whether the segment is canceled. The line leading to the segment will be red.
       */
      canceled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Whether the following segment is canceled, will only affect the last segment in a flightline. The line after the segment will be red.
       */
      destinationCanceled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Indicates time duration of a stop.
       */
      duration: { type: String },

      /**
       * Text to display, typically a station code (SEA, PVD, AVP).
       */
      iata: { type: String },

      /**
       * Indicates time is on the following calendar day.
       */
      nextDay: {
        type: Boolean,
        reflect: true
      },

      /**
       * @private
       */
      partialCancel: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Indicates a stopover. Do not provide duration.
       */
      stopover: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [css`${styleCss}`, css`${colorCss}`, css`${tokensCss}`];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-flightline"] - The name of the element that you want to register.
   *
   * @example
   * AuroFlightSegment.register("auro-flight-segment") // this will register this element to <auro-flight-segment/>
   *
   */
  static register(name = "auro-flight-segment") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(
      name,
      AuroFlightSegment,
    );
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-flight-segment",
    );
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const legClasses = {
      leg: true,
      layout: true,
      "leg--stopover": this.stopover,
      "leg--canceled": this.canceled || this.partialCancel,
    };

    return html`
      <div class="wrapper">
        <div class="layout">
          <slot></slot>
          <div class="${classMap(legClasses)}"></div>
          <span class="iata body-default">${this.iata}</span>
          ${this.duration ? html`<span class="duration body-xs">${this.duration}</span>` : undefined}
        </div>
      </div>
    `;
  }
}
