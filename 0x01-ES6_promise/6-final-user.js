/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(fisrtName, lastName, fileName) {
  signUpUser(fisrtName, lastName);
  uploadPhoto(fileName);
  return Promise.all([signUpUser(fisrtName, lastName), uploadPhoto(fileName)]);
}
