import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upld = uploadPhoto();
  const user = createUser();

  return Promise.all([upld, user]).then((data) => {
    const body = data[0].body;
    const fname = data[1].firstname;
    const lname = data[1].lastname;
    // eslint-disable-next-line
    console.log(`${body} ${fname} ${lname}`);
  }).catch(() => {
    // eslint-disable-next-line
    console.log('Signup system offline');
  });
}
