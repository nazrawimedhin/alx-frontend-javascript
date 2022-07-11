// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    return { photo: await uploadPhoto(), user: await createUser() };
  } catch (e) {
    return { photo: null, user: null };
  }
}
