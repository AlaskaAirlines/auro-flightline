import { AuroFlightline } from './src/auro-flightline.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-flightline', AuroFlightline);
