// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
for (var i = 0; i < 100; i++){
  if ((i % 3) == 0)  {
      console.log("FIZZ");
  } else if ((i % 5) == 0) {
      console.log("BUZZ");
  } else {
      console.log(i);
  }
}
