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
      player: 'Red',
      board: {
        '6': ['', '', '', '', '', '', ''],
        '5': ['', '', '', '', '', '', ''],
        '4': ['', '', '', '', '', '', ''],
        '3': ['', '', '', '', '', '', ''],
        '2': ['', '', '', '', '', '', ''],
        '1': ['', '', '', '', '', '', ''],
        '0': ['', '', '', '', '', '', '']
      }
    };
    this.handleClick = this.handleClick.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
    this.checkRowWin = this.checkRowWin.bind(this);
    this.checkColWin = this.checkColWin.bind(this);
    this.checkDiagWin = this.checkDiagWin.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let index = Number(e.target.id);
    for (let key in this.state.board) {
      if (this.state.board[key][index] === '') {
        this.state.board[key][index] = this.state.player;
        this.setState({
          [key]: this.state.board[key]
        });
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

  checkRowWin() {

  }

  checkColWin() {

  }

  checkDiagWin() {

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