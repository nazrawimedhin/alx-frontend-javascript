export default function appendToEachArrayValue(array, appendString) {
    for (const value of array) {
      array[array.indexof(value)] = appendString + value;
    }
  
    return array;
  }
