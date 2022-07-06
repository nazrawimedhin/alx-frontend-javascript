import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let firstName;
  let lastName;
  let body;

  const p = uploadPhoto();
  const u = createUser();

  return Promise.all([p, u]).then((data) => {
    body = data[0].body;
    firstName = data[1].firstName;
    lastName = data[1].lastName;
    // eslint-disable-next-line
    console.log(`${body} ${firstName} ${lastName}`);
  }).catch(() => {
    // eslint-disable-next-line
    console.log('Signup system offline');
  });
}
