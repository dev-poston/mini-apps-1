const playerX = 'X';
const playerO = 'O';
const cells = document.getElementsByClassName('cell');
let swap = false;

let board = {
  row1: [0, 0, 0],
  row2: [0, 0, 0],
  row3: [0, 0, 0]
};

let switchPlayer = () => {
  swap = !swap;
};

let handleClick = (e) => {
  console.log('click');
  if (!swap) {
    e.target.textContent = playerX;
  } else {
    e.target.textContent = playerO;
  }
  switchPlayer();
};

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick, {once: true});
};

console.log('Playing Tic Tac Toe @', new Date());