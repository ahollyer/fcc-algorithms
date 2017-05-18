// print.js
// Aspen Hollyer

//Print Numbers
//Write a function which accepts a start and end number, and prints the numbers
//from one to the other, one per line:
function printNumbers(start, end) {
  for(let count=start; count<=end; count++) {
    console.log(count);
  }
}
printNumbers(1, 10);

//Print a Square
//Write a function which is given a side length and prints a square
//of that size using asterisks
function printSquare(sideLength) {
  for(let i=0; i<sideLength; i++) {
    console.log('*'.repeat(sideLength));
  }
}
printSquare(5);

function printBox(width, height) {
  console.log('*'.repeat(width));
  for(let i=0; i<height-2; i++) {
    console.log('*' + ' '.repeat(width-2) + '*');
  }
  console.log('*'.repeat(width));
}
printBox(10, 5);

function printBanner(text) {
  bannerLength = text.length + 4;
  console.log('*'.repeat(bannerLength));
  console.log('*', text, '*');
  console.log('*'.repeat(bannerLength));
}
printBanner('UNICORNS!!');
