import React from 'react';
import './experience.css';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='experienceContainer' className='experience-container'>
                <div className='section-title'>My Expierence</div>
                <div className='experience-section hive9-section'>
                    <div className='inline-middle experience-image-container'>
                        <img src='/images/hive9Logo.webp' />
                    </div>
                    <div className='inline-top experience-content-container'>
                        <p>Front end Developer (2017 - present)</p>
                        <p>Leading the UI development for marketing performance and planning software helping B2B marketers make a measurable and predictable impact on revenue.</p>
                        <p>Achievements:</p>
                        <ul>
                            <li>Converted existing app into React with better performance and usability.</li>
                            <li>Developed a React grid component from the ground in replacement of DHTMLX grid for presenting large data sets more efficiently.</li>
                            <li>Refactored existing front end code base, with 10k+ lines of code removal.</li>
                        </ul>
                    </div>
                </div>
                <div className='experience-section microsoft-section'>
                    <div className='inline-middle experience-image-container'>
                        <img src='/images/microsoft-logo.png' />
                    </div>
                    <div className='inline-top experience-content-container'>
                        <p>UI Developer (2015 - 2016 as a contractor via Marlabs)</p>
                        <p>Developed UI for Microsoft's internal tool Dynamics AX 2012 Expense app, which is for creating, managing and submitting expense report.</p>
                        <p>Responsibilities:</p>
                        <ul>
                            <li>Create pages, panels and flyouts using HTML5, CSS3, JavaScript, JQuery, Bootstrap and KnockoutJS to provide rich and responsive display.</li>
                            <li>Provide globalization and localization support for 40+ countries.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
