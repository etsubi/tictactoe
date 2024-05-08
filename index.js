const readline = require("readline-sync");

let board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

function returnMappedIndex(number) {
  let reminder = number % 3;
  let dividend = Math.floor(number / 3);

  return [dividend, reminder];
}

function checkWinner() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] !== 0 &&
      board[i][0] === board[i][1] &&
      board[i][0] === board[i][2]
    ) {
      return true;
    }
  }
  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] !== 0 &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      return true;
    }
  }
  // Check diagonals
  if (
    board[0][0] !== 0 &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    return true;
  }
  if (
    board[0][2] !== 0 &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    return true;
  }
  return false;
}

function moveAvailable() {
  if (
    board[0][0] != 0 &&
    board[0][1] != 0 &&
    (board[0][2] != 0) & (board[1][0] != 0) &&
    board[1][1] != 0 &&
    (board[1][2] != 0) & (board[2][0] != 0) &&
    board[2][1] != 0 &&
    board[2][2] != 0
  ) {
    return false;
  }
  return true;
}

let whichPlayer = true; // Indicates Player 1's turn

while (true) {
  if (!moveAvailable()) {
    if (checkWinner()) {
      console.log(`${whichPlayer ? "Player 1" : "Player 2"} wins!`);
      break;
    } else {
      console.log(`no winner`);
      break;
    }
  }

  if (checkWinner()) {
    console.log(`${whichPlayer ? "Player 1" : "Player 2"} wins!`);
    break;
  }
  console.log("The board is: ");
  console.log();
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
  console.log();
  const playerInput = Number(
    readline.question(
      `${whichPlayer ? "Player 1" : "Player 2"} enter your index : `
    )
  );

  const coordinates = returnMappedIndex(playerInput);

  if (board[coordinates[0]][coordinates[1]] === 0) {
    board[coordinates[0]][coordinates[1]] = whichPlayer ? -1 : 1;

    whichPlayer = !whichPlayer;
  } else {
    console.log("This position is already taken. Please choose another one.");
  }
}
