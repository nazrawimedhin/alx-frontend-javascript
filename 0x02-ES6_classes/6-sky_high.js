/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/extensions
import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.__floors = floors;
  }

  get floor() {
    return this.__floors;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
