import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(fisrtName, lastName, fileName) {
  signUpUser(fisrtName, lastName);
  uploadPhoto(fileName);
  return Promise.all([signUpUser(fisrtName, lastName), uploadPhoto(fileName)]);
}
