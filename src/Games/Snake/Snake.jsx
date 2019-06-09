import React from 'react';
import './snake.css';
const MAP_SIZE = [15, 15];
const START_X = Math.floor(MAP_SIZE[0] / 2);
const START_Y = Math.floor(MAP_SIZE[1] / 2);
const INITIAL_COORDINATES = [[START_X, START_Y - 2], [START_X, START_Y - 1], [START_X, START_Y - 0], [START_X, START_Y + 1], [START_X, START_Y + 2]];
var ALL_COORDINATES = [];
for (var j = MAP_SIZE[1] - 1; j >= 0; j--) {
    for (var i = 0; i < MAP_SIZE[0]; i++) {
        ALL_COORDINATES.push([i, j]);
    }
}

export default class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyCoordinates: INITIAL_COORDINATES,
            direction: 'up',
            food: [],
            start: false,
            gameover: false,
            win: false
        };
    }

    interval = null;

    componentDidMount = () => {
        this.interval = setInterval(this.moveNext, 200);
        document.getElementById('snakeContainer').addEventListener('keydown', this.keyDownHandler);
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.direction != this.state.direction) {
            clearInterval(this.interval);
            this.moveNext();
            this.interval = setInterval(this.moveNext, 200);
        }
    }

    render() {
        const { bodyCoordinates, food, gameover, win } = this.state;
        const containerWidth = 500;
        const containerHeight = 500;
        const containerStyle = {
            width: containerWidth,
            height: containerHeight,
            position: 'relative'
        };
        const cellStyle = {
            width: containerWidth / MAP_SIZE[0],
            height: containerWidth / MAP_SIZE[1],
        };

        return (
            <div id='snakeContainer' className='snake-container' style={containerStyle}>
                <div style={{ margin: '10px 0' }}>Try out the snake written in less than 200 lines of JS code.</div>
                {
                    ALL_COORDINATES.map((coordinates, i) => {
                        const isActive = bodyCoordinates.some(c => c[0] === coordinates[0] && c[1] === coordinates[1])
                            || coordinates[0] === food[0] && coordinates[1] === food[1];

                        return (
                            <div className={`inline-top snake-cell ${isActive ? 'active' : ''}`} key={i * 100 + j} style={cellStyle}></div>
                        );
                    })
                }
                <div className='align-center' style={{ margin: '10px 0' }}>
                    <button onClick={this.reset}>Start</button>
                </div>
                {
                    gameover && (
                        <div style={{ position: 'absolute', top: 0, left: '30%', color: 'red', fontSize: '40px' }}>GAME OVER !</div>
                    )
                }
                {
                    win && (
                        <div style={{ position: 'absolute', top: 0, left: '30%', color: 'green', fontSize: '40px' }}>You Win !</div>
                    )
                }
            </div>
        );
    }

    keyDownHandler = event => {
        const { bodyCoordinates } = this.state;
        const head = bodyCoordinates[bodyCoordinates.length - 1];
        const second = bodyCoordinates[bodyCoordinates.length - 2];

        switch (event.keyCode) {
            case 38: // up
                second[1] - head[1] !== 1 && this.setState({ direction: 'up' });
                break;
            case 40: // down
                second[1] - head[1] !== -1 && this.setState({ direction: 'down' });
                break;
            case 37: // left
                second[0] - head[0] !== -1 && this.setState({ direction: 'left' });
                break;
            case 39: // right
                second[0] - head[0] !== 1 && this.setState({ direction: 'right' });
                break;
        }

        event.preventDefault();
    }

    moveNext = () => {
        const { start, direction, bodyCoordinates, food } = this.state;

        if (start) {
            const head = bodyCoordinates[bodyCoordinates.length - 1];
            var newCoordinates;

            switch (direction) {
                case 'up':
                    newCoordinates = [head[0], head[1] + 1];
                    break;
                case 'down':
                    newCoordinates = [head[0], head[1] - 1];
                    break;
                case 'left':
                    newCoordinates = [head[0] - 1, head[1]];
                    break;
                case 'right':
                    newCoordinates = [head[0] + 1, head[1]];
                    break;
                default:
                    break;
            }

            if (bodyCoordinates.length === MAP_SIZE[0] * MAP_SIZE[1]) {
                this.setState({
                    win: true,
                    start: false
                });
            } else if (newCoordinates[0] < 0 || newCoordinates[0] >= MAP_SIZE[0]
                || newCoordinates[1] < 0 || newCoordinates[1] >= MAP_SIZE[1]
                || bodyCoordinates.some(bc => bc[0] === newCoordinates[0] && bc[1] === newCoordinates[1])) {
                this.setState({
                    start: false,
                    gameover: true
                });
            } else if (food[0] === newCoordinates[0] && food[1] === newCoordinates[1]) {
                this.setState({
                    bodyCoordinates: bodyCoordinates.concat([newCoordinates]),
                    food: this.generateFood(),
                });
            } else {
                this.setState({
                    bodyCoordinates: bodyCoordinates.slice(1).concat([newCoordinates])
                });
            }
        }
    }

    reset = () => {
        this.setState({
            bodyCoordinates: INITIAL_COORDINATES,
            start: true,
            food: this.generateFood(),
            gameover: false,
            direction: 'up'
        });
    }

    generateFood = () => {
        const { bodyCoordinates, food } = this.state;
        const remainingCoordinates = ALL_COORDINATES.filter(c => {
            return c[0] !== food[0] && c[1] !== food[1]
                && !bodyCoordinates.some(bc => bc[0] === c[0] && bc[1] === c[1]);
        });

        return remainingCoordinates[Math.floor(Math.random(1) * remainingCoordinates.length)];
    }
}
