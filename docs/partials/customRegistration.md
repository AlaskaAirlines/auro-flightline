```js
// Import the class only
import { AuroFlightSegment } from "./auro-flight-segment.js";
import { AuroFlightline } from "./auro-flightline.js";

// Register with a custom name if desired
AuroFlightSegment.register('custom-flight-segment');
AuroFlightline.register('custom-flightline');
```

This will create a new custom element `<custom-flightline>` and `<custom-flight-segment>` that behaves exactly like `<auro-flightline>` and `<auro-flight-segment>`, allowing both sets of components to coexist on the same page without interfering with each other.
