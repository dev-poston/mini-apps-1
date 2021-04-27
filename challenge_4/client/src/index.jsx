import React from 'react';
import ReactDOM from 'react-dom';
import Row0 from './components/Row0.jsx';
import Row1 from './components/Row1.jsx';
import Row2 from './components/Row2.jsx';
import Row3 from './components/Row3.jsx';
import Row4 from './components/Row4.jsx';
import Row5 from './components/Row5.jsx';
import Row6 from './components/Row6.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tieCount: 0,
      player: 'Red',
      board: {
        6: ['', '', '', '', '', '', ''],
        5: ['', '', '', '', '', '', ''],
        4: ['', '', '', '', '', '', ''],
        3: ['', '', '', '', '', '', ''],
        2: ['', '', '', '', '', '', ''],
        1: ['', '', '', '', '', '', ''],
        0: ['', '', '', '', '', '', '']
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.checkRowWin = this.checkRowWin.bind(this);
    this.checkColWin = this.checkColWin.bind(this);
    this.checkMajDiagWin = this.checkMajDiagWin.bind(this);
    this.checkMinDiagWin = this.checkMinDiagWin.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      tieCount: this.state.tieCount + 1
    });
    if (this.state.tieCount === 49) {
      alert('Draw!');
    }
    let index = Number(e.target.id);
    for (let key in this.state.board) {
      if (this.state.board[key][index] === '') {
        this.state.board[key][index] = this.state.player;
        this.setState({
          [key]: this.state.board[key]
        });
        this.checkRowWin(this.state.board[key]);
        this.checkColWin(this.state.board, index);
        this.checkMajDiagWin(this.state.board);
        this.checkMinDiagWin(this.state.board);
        break;
      }
    }
    this.switchPlayer();
  }

  switchPlayer() {
    if (this.state.player === 'Red') {
      this.setState({
        player: 'Black'
      });
    } else {
      this.setState({
        player: 'Red'
      });
    }
  }

  checkRowWin(row) {
    let redCount = 0;
    let blackCount = 0;
    row.forEach((cell) => {
      if (cell === 'Red') {
        blackCount = 0;
        redCount++;
        if (redCount === 4) {
          alert('Player Red WINS!');
        }
      }
      if (cell === 'Black') {
        redCount = 0;
        blackCount++;
        if (blackCount === 4) {
          alert('Player Black WINS!');
        }
      }
      if (cell === '') {
        redCount = 0;
        blackCount = 0;
      }
    });
  }

  checkColWin(board, col) {
    let redCount = 0;
    let blackCount = 0;
    for (let key in board) {
      if (board[key][col] === 'Red') {
        blackCount = 0;
        redCount++;
        if (redCount === 4) {
          alert('Player Red WINS!');
        }
      }
      if (board[key][col] === 'Black') {
        redCount = 0;
        blackCount++;
        if (blackCount === 4) {
          alert('Player Black WINS!');
        }
      }
    }
  }

  checkMajDiagWin(board, key = 0, row = 0) {
    let redCount = 0;
    let blackCount = 0;
    let inner = (brd, k, i, rC, bC) => {
      if (rC === 4) {
        alert('Player Red WINS!');
      }
      if (bC === 4) {
        alert('Player Black WINS!');
      }
      for (i; i < brd[k].length; i++) {
        if (brd[k][i] === 'Red') {
          inner(brd, k + 1, i + 1, rC + 1, bC = 0);
        }
        if (brd[k][i] === 'Black') {
          inner(brd, k + 1, i + 1, rC = 0, bC + 1);
        }
      }
    }
    inner(board, key, row, redCount, blackCount);
  }

  checkMinDiagWin(board) {
    // let redCount = 0;
    // let blackCount = 0;
    // for (let key in board) {
    //   for (let i = board[key].length - 1; i >= 0; i--) {
    //     if (board[key][i] === 'Red') {
    //       blackCount = 0;
    //       redCount++;
    //       if (redCount === 4) {
    //         alert('Player Red WINS!');
    //       }
    //       i -= 1;
    //       break;
    //     }
    //     if (board[key][i] === 'Black') {
    //       redCount = 0;
    //       blackCount++;
    //       if (blackCount === 4) {
    //         alert('Player Black WINS!');
    //       }
    //       i -= 1;
    //       break;
    //     }
    //   }
    //   //console.log('Red: ', redCount, 'Black: ', blackCount);
    // }
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th id="0" onClick={this.handleClick}>Drop Here</th>
              <th id="1" onClick={this.handleClick}>Drop Here</th>
              <th id="2" onClick={this.handleClick}>Drop Here</th>
              <th id="3" onClick={this.handleClick}>Drop Here</th>
              <th id="4" onClick={this.handleClick}>Drop Here</th>
              <th id="5" onClick={this.handleClick}>Drop Here</th>
              <th id="6" onClick={this.handleClick}>Drop Here</th>
            </tr>
          </thead>
          <tbody>
            <Row0 row={this.state.board['6']}/>
            <Row1 row={this.state.board['5']}/>
            <Row2 row={this.state.board['4']}/>
            <Row3 row={this.state.board['3']}/>
            <Row4 row={this.state.board['2']}/>
            <Row5 row={this.state.board['1']}/>
            <Row6 row={this.state.board['0']}/>
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));