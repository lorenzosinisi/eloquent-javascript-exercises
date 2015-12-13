/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
Passing this string to console.log should show something like this:
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
# # # # # # # #
*/

var size = 100;
for (var i = 0; i < size; i++) {
  // iterate each row
  var row = '';
  for (var r = 0; r < size; r++) {
    // iterate each line of the row
    var total = i + r;
    if (total % 2 == 0) {
      row += '#';
    } else {
      row += ' ';
    }
   }
   console.log(row);
 }
