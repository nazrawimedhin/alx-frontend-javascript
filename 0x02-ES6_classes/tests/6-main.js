/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import SkyHighBuilding from '../6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());
