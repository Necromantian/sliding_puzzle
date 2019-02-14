import React, { Component } from 'react';
import './Board.css';
import Tile from './Tile.js'

class Board extends Component {

    getRandomColor = () =>{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        let { tilesData, moveTile, animationSpeed, changingColors } = this.props;
        let tiles = tilesData.map((t, i) =>
            <Tile key={i} color ={changingColors ? this.getRandomColor() : null} moveTile={moveTile} animationSpeed={animationSpeed} number={t.number} currentPosition={t.currentPosition} />
        )
        if (tiles.length === 0) {
            return null;
        }
        else {
            return (<span>
                {tiles}
            </span>
            );
        }
    }
}

export default Board;