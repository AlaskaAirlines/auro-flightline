/* eslint-disable object-property-newline */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
// If use litElement base class
import { html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import colorCss from "./styles/color-flightline.scss";
import styleCss from "./styles/style-flightline.scss";
import tokensCss from "./styles/tokens.scss";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * Shows a flight's layovers and stopovers as dots on a timeline that adapts to its width.
 *
 * **Key capabilities**
 * - **Shows each stop**: Each `<auro-flight-segment>` in the default slot adds a dot to the timeline.
 * - **Adapts to narrow spaces**: When it has two or more segments and is `320px` wide or narrower, it shows the number of stops instead of the dots.
 * - **Shows cancellations**: `canceled` shows the whole flight as canceled.
 *
 * **Example**
 * ```html
 * <auro-flightline>
 *   <auro-flight-segment iata="SEA" duration="1h 40m"></auro-flight-segment>
 * </auro-flightline>
 * ```
 * @customElement auro-flightline
 *
 * @slot - The `<auro-flight-segment>` elements that make up the flight, one for each stop.
 */

export class AuroFlightline extends LitElement {
  constructor() {
    super();

    this._initializeDefaults();
  }

  _initializeDefaults() {
    this.canceled = false;

    /**
     * @private
     */
    this.hasCanceledSegment = false;

    /**
     * @private
     */
    this.firstSegmentCanceled = false;

    /**
     * @private
     */
    this.lastSegmentCanceled = false;

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();
  }

  static get properties() {
    return {
      /**
       * Sets the whole flightline to canceled. The line turns red and dashed, and every segment inside it is shown as canceled.
       */
      canceled: { 
        type: Boolean, 
        reflect: true 
      },

      /**
       * @private
       */
      firstSegmentCanceled: { type: Boolean, reflect: true },

      /**
       * @private
       */
      hasCanceledSegment: { type: Boolean, reflect: true },

      /**
       * @private
       */
      lastSegmentCanceled: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [styleCss, colorCss, tokensCss];
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-flightline"] - The tag name to register the element under.
   *
   * @example
   * AuroFlightline.register("custom-flightline"); // Registers the element as <custom-flightline>.
   *
   */
  static register(name = "auro-flightline") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFlightline);
  }

  firstUpdated() {
    // Add the tag name as an attribute if it is different than the component name
    this.runtimeUtils.handleComponentTagRename(this, "auro-flightline");
  }

  /** @private */
  containsCanceledSegment() {
    const segments = this.querySelectorAll(
      "auro-flight-segment, [auro-flight-segment]",
    );
    for (let idx = 0; idx < segments.length; idx += 1) {
      const segment = segments[idx];
      if (this.canceled) {
        segment.canceled = true;
        segment.destinationCanceled = true;
      }

      if (segment.canceled || segment.hasAttribute("canceled")) {
        this.hasCanceledSegment = true;
        if (idx === 0) {
          this.firstSegmentCanceled = true;
        }
      }

      if (
        segment.hasAttribute("destinationCanceled") &&
        idx === segments.length - 1
      ) {
        this.lastSegmentCanceled = true;
      }
    }
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    const isMultiple = this.children.length > 1;
    const classes = {
      slotContainer: true,
      nonstop: !this.children.length,
      multiple: isMultiple,
      canceled: this.canceled,
    };

    return html`
      <div class="${classMap(classes)}">
        <slot @slotchange=${this.containsCanceledSegment}></slot>
        ${
          isMultiple
            ? html`
          <auro-flight-segment
            class="showNoStops"
            ?canceled=${this.firstSegmentCanceled}
            ?partialCancel=${this.hasCanceledSegment}
            ?destinationCanceled=${this.lastSegmentCanceled}
            iata="${this.children.length} stops"
          ></auro-flight-segment>
        `
            : html``
        }
      </div>`;
  }
}
