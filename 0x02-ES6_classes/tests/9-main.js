/* eslint-disable no-console */
// eslint-disable-next-line import/extensions, import/no-named-as-default
import listOfStudents from '../9-hoisting.js';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  (student) => student.fullStudentDescription
);

console.log(listPrinted);
