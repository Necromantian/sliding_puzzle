import React, { Component } from 'react';
import './Game.css';

import Board from './Board/Board.js'
import Menu from './Menu/Menu.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posX: 0,
      posY: 0,
      tilesData: [],
      animationSpeed: "slow",
      changingColors: false
    };
  };

  componentDidMount() {
    let tilesData = this.getInitTilesData();
    this.setState({ tilesData });
  }


  getInitTilesData() {
    let tilesData = [];
    for (let i = 0; i < 15; i++) {
      tilesData.push({ number: i, currentPosition: i });
    }
    return tilesData;
  }

  moveTile(clickedTile, currentPosition) {
    this.setState({ animationSpeed: "fast" }, () => {
      let tilesData = [...this.state.tilesData];

      let possibleMovements = this.getPossibleMovements(currentPosition);
      for (let i = 0; i < possibleMovements.length; i++) {
        let move = possibleMovements[i];
        if (!tilesData.some(t => t.currentPosition === move)) { //if there is no tile with currentPosition on possibleMovements[i]
          tilesData[clickedTile].currentPosition = move;
          this.setState({ tilesData },() => {
            if(this.checkIfWin()){
              alert("WIN")
            }
          });
        }
      }
    });
  }

  getPossibleMovements(currentPosition) {
    let possibleMovements = [];
    if (currentPosition + 1 <= 15 && currentPosition !== 7 && currentPosition !== 11 && currentPosition !== 3) //7,11,3 could go to next row by accident
      possibleMovements.push(currentPosition + 1);

    if (currentPosition + 4 <= 15)
      possibleMovements.push(currentPosition + 4);

    if (currentPosition - 1 >= 0 && currentPosition !== 12 && currentPosition !== 8 && currentPosition !== 4) //7,10,3 could go to previous row by accident
      possibleMovements.push(currentPosition - 1);

    if (currentPosition - 4 >= 0)
      possibleMovements.push(currentPosition - 4);

    return possibleMovements;
  }

  swapTwoRandomTiles = () => {
    let tilesData = [...this.state.tilesData];
    let rand1 = Math.floor(Math.random() * 15);
    let rand2 = Math.floor(Math.random() * 15);

    let temp = tilesData[rand1].currentPosition;
    tilesData[rand1].currentPosition = tilesData[rand2].currentPosition;
    tilesData[rand2].currentPosition = temp;

    this.setState({ tilesData });
  }

  shuffleClick = () => {
    this.setState({ animationSpeed: "slow" }, () => {
      for (let i = 0; i < 50; i++) {
        this.swapTwoRandomTiles();
      }
    });
  }

  changingColorsClick = () => {
    this.setState({ changingColors: !this.state.changingColors })
  }

  checkIfWin() {
    let tilesData = [...this.state.tilesData];

    for (let i = 0; i < tilesData.length; i++) {
      if(tilesData[i].currentPosition !== i){
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div className="game">
        <div className='boardContainer'>
          {/* <button onClick={this.shuffle.bind(this)}>Tasuj</button> */}
          <div className="board">
            <Board changingColors={this.state.changingColors} animationSpeed={this.state.animationSpeed} moveTile={this.moveTile.bind(this)} tilesData={this.state.tilesData} />
          </div>
        </div>
        <Menu shuffleClick={this.shuffleClick} changingColorsClick={this.changingColorsClick} changingColorsState={this.state.changingColors} />
      </div>

    );
  }
}

export default Game;
