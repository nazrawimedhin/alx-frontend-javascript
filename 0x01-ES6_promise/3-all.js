import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let fName;
  let lName;
  let body;

  const p = uploadPhoto();
  const u = createUser();

  return Promise.all([p, u]).then((data) => {
    body = data[0].body;
    fName = data[1].firstName;
    lName = data[1].lastName;
    // eslint-disable-next-line
    console.log(`${body} ${fName} ${lName}`);
  }).catch(() => {
    // eslint-disable-next-line
    console.log('Signup system offline');
  });
}
