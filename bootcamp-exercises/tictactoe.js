// tictactoe.js
// Aspen Hollyer

// Write a function ticTacToe which accepts a 2D array of size 3x3. Each cell
// in the array can have values 'O', 'X', or null. The ticTacToe function will
// determine the winner by returning 'O' if O makes a row or returning 'X' if
// X makes a row.

function ticTacToe(board) {
  for (let i = 0; i < 3; i ++) {
    // Check horizontal wins
    if(board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return board[i][0];
    // Check vertical wins
    } else if(board[0][i] === board [1][i] && board[1][i] === board[2][i]) {
      return board[0][i];
    }
  }
  // Check diagonal wins
  if(board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    return board[1][1];
  } else if(board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    return board[1][1];
  }
}

console.log(ticTacToe([
  ['O', 'O', 'O'],
  ['X', null, 'X'],
  [null, 'X', null]
]));
//O

console.log(ticTacToe([
  ['O', 'X', 'O'],
  ['O', 'X', null],
  [null, 'X', null]
]));
//X

console.log(ticTacToe([
  ['O', 'X', 'O'],
  ['X', 'O', null],
  ['O', 'X', 'X']
]));
//O
