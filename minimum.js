/*
  Write a funciton that returns the minimum between 2 numbers in Javascript
  taking into account the -Infinity
*/
function minimum(first, second) {
  if (typeof first != "number" || typeof second != "number" ) {
    if (first == null && second == null) {
      return -Infinity;
    } else {
      return null;
    }
  }
  if (first < second) {
    return first;
  } else {
    return second;
  }
}
minimum(1, 100);
minimum(); // -Infinity
