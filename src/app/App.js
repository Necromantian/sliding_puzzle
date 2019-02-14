import React, { Component } from 'react';
import './App.css';

import Game from './Game/Game.js';
import Menu from './Menu/Menu.js';
class App extends Component {
  shuffle(){

  }
  checkForWin(){
    
  }
  render() {
    return (
      <div className="game">
        <Game/>
        <Menu/>
      </div>
    );
  }
}

export default App;
