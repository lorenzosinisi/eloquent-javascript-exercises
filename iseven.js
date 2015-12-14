function isEven(number) {
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else if (number > 10000 || number == Infinity || number == -Infinity ) {
    return null;
  } else {
    if (number > 0) {
      return isEven(number -= 2);
    } else {
      return isEven(number += 2);
    };
  }
}

isEven(5);
isEven(-10);
isEven(50);
isEven(75);
isEven(Infinity);
