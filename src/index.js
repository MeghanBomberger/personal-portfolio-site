// DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// CONTEXT
import ScrollToTop from './context/ScrollProvider.js'

// COMPONENTS
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <App/>
        </ScrollToTop>
    </BrowserRouter>,
document.getElementById('root'))