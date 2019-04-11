// DEPENDENCIES
import React from 'react'
import { Link } from 'react-router-dom'

// COMPONENTS
import './styles/Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="menu">
                <Link to="/">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact Me</Link>
            </div>
        </div>
    )
}

export default Footer