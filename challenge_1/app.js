const playerX = 'X';
const playerO = 'O';
const cells = document.getElementsByClassName('cell');
let currentPlayer = playerX;
let drawCounter = 0;


let gameBoard = {
  '1': [0, 0, 0],
  '2': [0, 0, 0],
  '3': [0, 0, 0]
};

// switches between players every turn
const switchPlayer = () => {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
};

// board checkers
const checkWinOrDraw = (board) => {
  let winner;
  drawCounter++;
  for (let i = 0; i < Object.keys(board).length; i++) {
    if (checkColWin(board, i)) {
      winner = checkColWin(board, i);
    }
    if (checkRowWin(board, i)) {
      winner = checkRowWin(board, i);
    }
    if (checkDiagWin(board)) {
      winner = checkDiagWin(board);
    }
  }
  if (drawCounter === 9) {
    winner = 'Draw!.. Play Again?';
  }
  if (winner) {
    return winner;
  }
};

const checkRowWin = (board, row) => {
  let xCount = 0;
  let oCount = 0;
  row = (row + 1).toString();
  for (let i = 0; i < board[row].length; i++) {
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
};

const checkColWin = (board, col) => {
  let xCount = 0;
  let oCount = 0;
  for (let key in board) {
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
};

const checkDiagWin = (board) => {
  let xCount = 0;
  let oCount = 0;
  if ((board['1'][0] === playerX && board['2'][1] === playerX && board['3'][2] === playerX) ||
    (board['1'][2] === playerX && board['2'][1] === playerX && board['3'][0] === playerX)) {
    return 'X Wins!';
  }
  if ((board['1'][0] === playerO && board['2'][1] === playerO && board['3'][2] === playerO) ||
    (board['1'][2] === playerO && board['2'][1] === playerO && board['3'][0] === playerO)) {
    return 'O Wins!';
  }
};

// displays win or draw msg
const displayMsg = (winOrDraw) => {
    alert(winOrDraw);
};

// click handler populates game board obj and DOM elements - the meat and potatoes
let handleClick = (e) => {
  e.target.textContent = currentPlayer;
  let boardXY = e.target.id.split(',');
  gameBoard[boardXY[0]][boardXY[1]] = currentPlayer;

  if (checkWinOrDraw(gameBoard)) {
    console.log('checkwin@click', checkWinOrDraw(gameBoard));
    displayMsg(checkWinOrDraw(gameBoard));
    resetBoard(handleClick);
  } else {
    switchPlayer();
  }

  console.log('click', gameBoard);
};

const resetBoard = (handler) => {
  const cellsReset = document.getElementsByClassName('cell');
  for (let i = 0; i < cellsReset.length; i++) {
    cellsReset[i].textContent = '';
    cellsReset[i].removeEventListener('click', handler, {once: true});
  }
  currentPlayer = playerX;
  gameBoard = {
    '1': [0, 0, 0],
    '2': [0, 0, 0],
    '3': [0, 0, 0]
  };
  setBoard(handleClick);
};

const setBoard = (handler) => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handler, {once: true});
  };
};

setBoard(handleClick);

console.log('Playing Tic Tac Toe @', new Date());

// button to reset game