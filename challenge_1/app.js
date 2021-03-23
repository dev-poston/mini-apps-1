const playerX = 'X';
const playerO = 'O';
const cells = document.getElementsByClassName('cell');
// let swap = false;
let currentPlayer = playerX;

let board = {
  '1': [0, 0, 0],
  '2': [0, 0, 0],
  '3': [0, 0, 0]
};

let switchPlayer = () => {
  if (currentPlayer === playerX) {
    currentPlayer = playerO;
  } else {
    currentPlayer = playerX;
  }
};

let handleClick = (e) => {
  e.target.textContent = currentPlayer;

  let boardXY = e.target.id.split(',');
  board[boardXY[0]][boardXY[1]] = currentPlayer;

  switchPlayer();

  console.log('target cell:', e.target.id);
  console.log('click', board);
};

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick, {once: true});
};

console.log('Playing Tic Tac Toe @', new Date());