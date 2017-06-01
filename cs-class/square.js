// square.js
// Aspen Hollyer

// Develop an algorithm to generate the following output for a
// square of size N, and implement it in JS.

// * * * * * * * * * *
//   * * * * * * * * *
//     * * * * * * * *
//       * * * * * * *
//         * * * * * *
//           * * * * *
//             * * * *
//               * * *
//                 * *
//                   *

var n = 10;

function printSquare(size) {
  let sizeCountdown = size;
  for(let i = 0; i < size; i++) {
    console.log(' '.repeat(i) + '*'.repeat(sizeCountdown));
    sizeCountdown--;
  }
}

printSquare(n);
