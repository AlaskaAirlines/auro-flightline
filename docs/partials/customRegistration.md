```js
// Import the classes only
import { AuroFlightline, AuroFlightSegment } from "@aurodesignsystem/auro-flightline/class";

// Register with custom names if desired
AuroFlightSegment.register("custom-flight-segment");
AuroFlightline.register("custom-flightline");
```

This creates `<custom-flightline>` and `<custom-flight-segment>`, which work like `<auro-flightline>` and `<auro-flight-segment>`. The flightline's "number of stops" summary at narrow widths still uses `<auro-flight-segment>`, so keep that element registered too.
