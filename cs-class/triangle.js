// square.js
// Aspen Hollyer

// Develop an algorithm to generate the following output for a
// triangle of size N, and implement it in JS.

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

const n = 10;

function printTriangle(size) {
  for(let i = 0; i < size; i++) {
    console.log(' '.repeat(i) + '*'.repeat(size - i));
  }
}

printTriangle(n);
