const playerX = 'X';
const playerO = 'O';
const cells = document.getElementsByClassName('cell');
let currentPlayer = playerX;

let gameBoard = {
  '1': [0, 0, 0],
  '2': [0, 0, 0],
  '3': [0, 0, 0]
};

const switchPlayer = () => {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
};

const checkWinOrDraw = (board) => {
  // if a row haa all x or o
  // win and display msg
  let draw = 0;
  let winner;

  for (var i = 0; i < Object.keys(board).length; i++) {
    if (checkColWin(board, i)) {
      winner = checkColWin(board, i);
    }
    if (checkRowWin(board, i)) {
      winner = checkRowWin(board, i);
    }
  }


  // if a columns has all x or o
  // win and display msg
  // if a diag has all x or o
  // win and display msg
  // if 9 pieces have been placed
  // draw and display msg
  if (winner) {
    displayMsg(winner);
  }
};

const checkRowWin = (board, row) => {
  let xCount = 0;
  let oCount = 0;
  row = (row + 1).toString();
  for (var i = 0; i < board[row].length; i++) {
    if (board[row][i] === playerX) {
      xCount++;
    }
    if (board[row][i] === playerO) {
      oCount++;
    }
  }
  if (xCount === 3) {
    return 'X Wins!';
  }
  if (oCount === 3) {
    return 'O Wins!';
  }
  return null;
};

const checkColWin = (board, col) => {
  let xCount = 0;
  let oCount = 0;
  for (var key in board) {
    if (board[key][col] === playerX) {
      xCount++;
    }
    if (board[key][col] === playerO) {
      oCount++;
    }
  }
  if (xCount === 3) {
    return 'X Wins!';
  }
  if (oCount === 3) {
    return 'O Wins!';
  }
  return null;
};

const displayMsg = (winner, draw) => {
  if (winner) {
    alert(winner);
  }
  if (draw) {
    alert('draw');
  }
};

let handleClick = (e) => {
  e.target.textContent = currentPlayer;
  let boardXY = e.target.id.split(',');
  gameBoard[boardXY[0]][boardXY[1]] = currentPlayer;
  checkWinOrDraw(gameBoard);
  // check win and draw
  // if win
  //  display win/draw msg
  //  clear board
  //  switch current player back to playerX
  // else if no win or draw
  //  switchplayer
  switchPlayer();

  console.log('click', gameBoard);
};

const resetBoard = () => {

};

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick, {once: true});
};

console.log('Playing Tic Tac Toe @', new Date());

//TODOs:
// check wins
// check draws
// display win or draw messsage
// button to reset game