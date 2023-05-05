import { AuroFlightline } from './src/auro-flightline.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-flightline') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroFlightline {});
  }
}

export { registerComponent }
