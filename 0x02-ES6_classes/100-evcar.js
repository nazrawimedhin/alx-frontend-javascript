import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // eslint-disable-next-line
	cloneCar() {
    return new Car[Symbol.species]();
  }
}
