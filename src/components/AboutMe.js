// DEPENDENCIES
import React from 'react'

// COMPONENTS
import './styles/AboutMe.css'
import selfie from './images/selfie.jpg'
import WorkingHistory from './WorkingHistory.js'

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="avatar-container">
                <div className="avatar"></div>
            </div>
            <div className="about-me-text">

            </div>
            <WorkingHistory/>
        </div>
    )
}

export default AboutMe