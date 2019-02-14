import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {
  
  render() {
    let {changingColorsState} = this.props;
    return (
      <div className='menu'>
        <button onClick={this.props.shuffleClick} className='menu__button'>
          Shuffle Tiles
        </button>
        <button onClick={this.props.changingColorsClick} className={changingColorsState ? 'menu__button menu__button--clicked':'menu__button'}>
          Crazy Colors
        </button>
      </div>
    );
  }
}

export default Menu;