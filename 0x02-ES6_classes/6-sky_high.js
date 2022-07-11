/* eslint-disable no-underscore-dangle */
import Building from './5-building';

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
