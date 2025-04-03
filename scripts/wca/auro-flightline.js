
import { AuroFlightline } from '../../src/auro-flightline.js';

/**
 * The auro-flightline component provides a responsive flight timeline experience by placing dots indicating stopovers and layovers on a timeline.
 * */
class AuroFlightlineWCA extends AuroFlightline {}

if (!customElements.get("auro-flightline")) {
  customElements.define("auro-flightline", AuroFlightlineWCA);
}
