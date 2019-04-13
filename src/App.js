// DEPENDENCIES
import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// COMPONENTS
import './components/styles/index.css'
import PDFIcon from './components/images/PDFIcon.png'
import AboutMe from './components/AboutMe.js'
import Contact from './components/Contact.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'


const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Switch>
                <Route onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} exact path="/" component={Skills}/>
                <Route onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} exact path="/projects" component={Projects}/>
                <Route onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} exact path="/aboutme" component={AboutMe}/>
                <Route onUpdate={() => window.scrollTo(0, 0)} history={createBrowserHistory()} exact path="/contact" component={Contact}/>
            </Switch>
            <a download href="https://docs.google.com/document/d/1yMB0ptyZBqqyDCP1OMg9mfHepngaG8aWgFOOVO5RJyo/export?format=pdf">
                <button className="resume-button">
                    <img className="resume-icon" alt="pdf icon" src={PDFIcon}/>
                    download a copy of my resume
                </button>
            </a>
            <Footer/>
        </div>
    )
}

export default withRouter(App)