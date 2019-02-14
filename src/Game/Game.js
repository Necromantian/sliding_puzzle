import React, { Component } from 'react';
import './Game.css';

import Tile from './Tile.js'

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {posX: 0, posY:0};
  };

  handleMouseDown = () => {
    this.setState({posX: this.state.posX+125});
  };

  handleMouseDown2 = () => {
    this.setState({posX: this.state.posX-125});
  };

  handleMouseDown3 = () => {
    this.setState({posY: this.state.posY-125});
  };

  handleMouseDown4 = () => {
    this.setState({posY: this.state.posY+125});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div className='boardContainer'>
        <div className="board">
        <button className='test'
          onMouseDown={this.handleMouseDown}>
          Toggle --
        </button>
        <button className='test2'
          onMouseDown={this.handleMouseDown2}>
          -- Toggle 
        </button>
        <button className='test3'
          onMouseDown={this.handleMouseDown3}>
          Toggle +
        </button>
        <button className='test4'
          onMouseDown={this.handleMouseDown4}>
         Toggle -
        </button>
          <Tile positionX={this.state.posX} positionY={this.state.posY}/>
        </div>
      </div>
    );
  }
}

export default Game;
