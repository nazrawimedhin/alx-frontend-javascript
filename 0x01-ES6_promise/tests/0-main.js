// eslint-disable-next-line import/extensions
import getResponseFromAPI from '../0-promise.js';

const response = getResponseFromAPI();

// eslint-disable-next-line
console.log(response instanceof Promise);
