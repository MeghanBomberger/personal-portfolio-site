// DEPENDENCIES
import React, { Component } from 'react'

// COMPONENTS
import "./styles/Header.css"


class Header extends Component {
    constructor(){
        super()
        this.state = {
            scrollToggle: true
        }
    }

    scrollToggler = () => {
        this.setState ({
            scrollToggle: !this.state.scrollToggle
        })
    }

    render(){

        return (
            <header className={this.state.scrollToggle ? "header-container" : "header-container-open"} onClick={this.scrollToggler}>
                {/* change the contents of this h4 to rotate through a list of job titles */}
                {/* https://www.npmjs.com/package/slick-carousel */}
                <h4 className="title">Full Stack Developer</h4>
                <h1>Meghan Bomberger</h1>                
            </header>
        )
    }
}

export default Header