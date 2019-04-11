// DEPENDENCIES
import React from 'react'

// COMPONENTS
import "./styles/Contact.css"

const Contact = () => {
    // let Maybe = {}

    // Maybe.emailme = (text) => {
    //     const a = 'a'
    //     if (!text) text = a + 'l' + 'd' + 'ou' + 's' + '@cs.b' + 'y' + 'u.ed' + 'u' 
    //     document.write('<' + a + ' href="m' + a + 'i'+'lto:'+a+'ldo' + 'us' + '@c&#39;+'s.by' + 'u.ed'+'u">'+text+'</a>')
    // }

    // Maybe.email = function (account,domain,text) {
    //     document.write('<a href="mailto:'+account+'@'+domain+'">'+text+'</a>') ;
    // } 

    return (
        <div className="contact-container">
            <h1>You can reach me at:</h1>
            <p><b>Phone:</b></p>
            <p>(801) 214-8548</p>
            <p><b>Email:</b></p>
            <p>meghanbomberger@gmail.com</p>
            <div className="events-calendar">
                <h1>Come check out my creative work:</h1>
                <div className="event-card">
                    <h2>FanX</h2>
                    <h3>April 19th and 20th, 2019</h3>
                    <h3>Vending as GeekeryMade</h3>
                    <h3>Salt Palace Convention Center</h3>
                    <h3>Salt Lake City, UT</h3>
                </div>
                <div className="event-card">
                    <h2>Salt Lake City Pride Festival</h2>
                    <h3>June 1st and 2nd, 2019</h3>
                    <h3>Vending as GeekeryMade</h3>
                    <h3>Downtown Salt Lake City, UT</h3>
                </div>
                <div className="event-card">
                    <h2>Urban Arts Gallery</h2>
                    <h3>Year Round</h3>
                    <h3>Vending as GeekeryMade</h3>
                    <h3>Gateway Mall</h3>
                    <h3>Salt Lake City, UT</h3>
                </div>
            </div>
        </div>
    )
}

export default Contact