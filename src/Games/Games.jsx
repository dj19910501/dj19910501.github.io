import React from 'react';
import './games.css';
import Snake from './Snake/Snake.jsx';
import Stock from './Stock/Stock.jsx';

export default class Games extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: 'snake'
        };
    }

    render() {
        const { game } = this.state;
        // {game == 'stock' && <Stock />}
        //<div className={`game-nav inline-top ${game == 'stock' ? 'active' : ''}`}>Stock</div>
                    
        return (
            <div id='gamesContainer' className='games-container general-container'>
                <div className='section-title'>Games</div>
                <div className='game-nav-container align-center'>
                    <div className={`game-nav inline-top ${game == 'snake' ? 'active' : ''}`}>Snake</div>
                </div>
                {game == 'snake' && <Snake />}
            </div>
        );
    }
}
