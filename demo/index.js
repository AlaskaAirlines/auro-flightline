import { AuroFlightSegment } from "../src/auro-flight-segment";
import { AuroFlightline } from "../src/auro-flightline";

AuroFlightline.register();
AuroFlightSegment.register();

AuroFlightline.register("custom-flightline");
AuroFlightSegment.register("custom-flight-segment");
