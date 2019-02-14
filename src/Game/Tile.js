import React, { Component } from 'react';
import './Game.css';

import { Motion, spring } from "react-motion";

class Tile extends Component {

    //fast
    //{stiffness: 900, damping: 40}

    //slow
    //{stiffness: 180, damping: 30}
  render() {
    return (
        <Motion style={{x: spring(this.props.positionX,{stiffness: 180, damping: 30}),y: spring(this.props.positionY)}}>
        {({x, y}) =>
          // children is a callback which should accept the current value of
          // `style`
          <div style={{
            WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
            transform: `translate3d(${x}px, ${y}px, 0)`,
          }}>
            <div className='tile'></div>
          </div>
        }
      </Motion>

    );
  }
}

export default Tile;