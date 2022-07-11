// eslint-disable-next-line import/extensions
import asyncUploadUser from '../100-await.js';

const test = async () => {
  const value = await asyncUploadUser();
  // eslint-disable-next-line no-console
  console.log(value);
};

test();
