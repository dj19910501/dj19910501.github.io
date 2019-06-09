import React from 'react';
import './education.css';

export default class Education extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='educationContainer' className='education-container general-container'>
                <div className='section-title'>My Education</div>
                <p>Allow me to present you a glance of both gorgeous campus.</p>
                <div className='education-section education-northwestern'>
                    <div className='inline-top education-content-container'>
                        <img src='/images/northwesternLogo.png' />
                        <div className='inline-top education-content-text'>
                            <div>Northwestern University, Evanston, IL</div>
                            <div>Master of Science in Electrical Engineering</div>
                            <div>Dec 2014</div>
                        </div>
                    </div>
                </div>
                <div className='education-section education-purdue'>
                    <div className='inline-top education-content-container'>
                        <img src='/images/purdueLogo.png' />
                        <div className='inline-top education-content-text'>
                            <div>Purdue University, West Lafayette, IN</div>
                            <div>Bachelor of Science in Electrical Engineering</div>
                            <div>May 2013</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
