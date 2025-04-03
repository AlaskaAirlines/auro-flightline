
import { AuroFlightSegment } from '../../src/auro-flight-segment.js';

/**
 * The auro-flight-segment component is a standard for indicating stopovers and layovers.
 * Stopovers do not have duration information and are indicated differently.
 * Layovers contain duration information and are indicated with a solid fill.
 * For more information about the difference between a layover and a stopover,
 * [please see this article.](https://www.turkishairlines.com/en-int/any-questions/what-is-the-difference-between-a-layover-and-a-stopover/).
 */
class AuroFlightSegmentWCA extends AuroFlightSegment {}

if (!customElements.get("auro-flight-segment")) {
  customElements.define("auro-flight-segment", AuroFlightSegmentWCA);
}
