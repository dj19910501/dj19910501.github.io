import React from 'react';
import './home.css';
import MyInfo from './../MyInfo/MyInfo.jsx';
import Experience from './../Experience/Experience.jsx';
import Education from './../Education/Education.jsx';
import Games from './../Games/Games.jsx';

const SECTIONS = [
    { id: 'myInfo', name: 'Me', containerId: 'myInfoContainer' },
    { id: 'experience', name: 'Experience', containerId: 'experienceContainer' },
    { id: 'education', name: 'Education', containerId: 'educationContainer' },
    { id: 'games', name: 'Games', containerId: 'gamesContainer' },
];

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: 'myInfo'
        };
    }

    componentDidMount = () => {
        document.addEventListener('scroll', e => {
            const windowScroll = window.scrollY;

            for (var i = SECTIONS.length - 1; i >= 0; i--) {
                if (document.getElementById(SECTIONS[i].containerId)
                    && (windowScroll + (window.innerHeight / 2) >= document.getElementById(SECTIONS[i].containerId).offsetTop)) {
                    this.setState({
                        activeSection: SECTIONS[i].id
                    });
                    break;
                }
            }
        });
    }

    render() {
        const { activeSection } = this.state;
        const bgs = ['#082656', '#15428c', '#2c5fb2', '#7da0d8', '#2c5fb2', '#15428c', '#082656'];
        const avatarBackground = `linear-gradient(to right, ${bgs[0]} 0%, ${bgs[1]} 15%, ${bgs[2]} 30%, ${bgs[3]} 50%, ${bgs[4]} 70%, ${bgs[5]} 85%, ${bgs[6]} 100%)`;

        return (
            <div className='home-container'>
                <div className='vertical-nav'>
                    {
                        SECTIONS.map(section => (
                            <div className={activeSection == section.id ? 'active' : ''} onClick={() => this.scrollToSection(section)}>
                                {section.name}
                            </div>
                        ))
                    }
                </div>
                <div className='avatar-container' style={{ background: avatarBackground }}>
                    <div className='avatar'></div>
                    <div className='avatar-description align-center'>
                        <div style={{ fontSize: '36px' }}>Jian Deng</div>
                        <div>
                            <span>Front End Developer @ </span>
                            <img src='/images/hive9Icon.webp' className='hive9-icon' />
                            <span>Hive9</span>
                        </div>
                        <div style={{ fontSize: '18px' }}>
                            <span>dengj1991@hotmail.com</span>
                        </div>
                    </div>
                </div>
                <MyInfo ref='myInfo' />
                <Experience ref='experience' />
                <Education ref='education' />
                <Games ref='games' />
            </div>
        );
    }

    scrollToSection = section => {
        window.scrollTo(0, document.getElementById(section.containerId).offsetTop);
    }
}
