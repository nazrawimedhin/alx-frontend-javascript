export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const a = 1;

    if (a === 1) {
      resolve('promise fulfilled');
    } else {
      reject(Error('promise not fulfilled'));
    }
  });
}
