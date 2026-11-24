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
 * Marks one stop on a flight as a layover or a stopover.
 *
 * **Key capabilities**
 * - **Layover**: A stop with a duration, shown as a filled marker. Set `duration` to show how long it lasts.
 * - **Stopover**: A stop with no duration, shown as an outlined marker. Set `stopover` to turn it on.
 * - **Cancellation**: `canceled` and `destinationCanceled` show the lines around the segment as canceled.
 *
 * **Example**
 * ```html
 * <auro-flight-segment iata="ORD" duration="3h 40m"></auro-flight-segment>
 * ```
 * Read about [the difference between a layover and a stopover](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).
 * @customElement auro-flight-segment
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
       * Marks the segment as canceled. The line leading to the segment is red and dashed, and the segment's marker is red.
       */
      canceled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Marks the final leg after the last segment as canceled. Use it on the last segment in a flightline, where it turns the line after the segment red and dashed and the duration text red.
       */
      destinationCanceled: {
        type: Boolean,
        reflect: true
      },

      /**
       * Sets the layover length shown under the station code, such as `3h 40m`. Don't set it on a stopover, because stopover durations can't be predicted.
       */
      duration: {
        type: String,
        reflect: true,
      },

      /**
       * Sets the text shown under the segment's marker, typically a station code such as `SEA`.
       */
      iata: {
        type: String,
        reflect: true,
      },

      /**
       * Marks a layover that extends into the next calendar day by showing its duration in red.
       */
      nextDay: {
        type: Boolean,
        reflect: true
      },

      /**
       * @internal
       */
      partialCancel: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Marks the segment as a stopover and shows its marker as an outlined circle. Don't set `duration` on a stopover, because stopover durations can't be predicted.
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
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-flight-segment"] - The tag name to register the element under.
   *
   * @example
   * AuroFlightSegment.register("custom-flight-segment"); // Registers the element as <custom-flight-segment>.
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
