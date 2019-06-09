import React from 'react';
import './myInfo.css';

export default class MyInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='myInfoContainer' className='my-info-container general-container'>
                <p>Welcome to my github page!</p>
                <p>
                    I'm Jian, originally from China. Currently I'm working as a Front End Developer at Hive9, located in Austin, Texas. For the past two
                    years and a half, I've been working on both building out new features and converting the existing app into React. The process of
                    crafting all kinds of components and have them work efficiently with each other has been thrilling and satisfying.
                </p>
            </div>
        );
    }
}
