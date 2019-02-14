import React, { Component } from 'react';
import './Board.css';

import { Motion, spring } from "react-motion";

const fastAnimation = {stiffness: 900, damping: 40};
const slowAnimation = {stiffness: 180, damping: 30};

class Tile extends Component {

  render() {
    let {moveTile, number, currentPosition, animationSpeed, color} = this.props;

    let currPos = this.props.currentPosition;
    let animationParams = animationSpeed==="fast" ? fastAnimation : slowAnimation;
    return (
      
        <Motion style={{x: spring((currPos%4)*125,animationParams),y: spring((Math.floor(currPos/4)*125),animationParams)}}>
        {({x, y}) =>
          <div style={{
            WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
            transform: `translate3d(${x}px, ${y}px, 0)`,
          }}>
            <div onClick={()=> moveTile(number,currentPosition)} className='tile noselect' style={{backgroundColor: color}}>
              <span className={number===currentPosition ? 'tile__number tile__number--correct':'tile__number tile__number--incorrect'}>
                {number+1}
              </span>
            </div>
          </div>
        }
      </Motion>

    );
  }
}

export default Tile;