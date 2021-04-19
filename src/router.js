//IMPORTS
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//COMPONENTS
import Home from './modules/home'

const router = () =>
    <Router>
        {/* PUBLIC */}
        <Route path='/' exact component={Home} />
        {/* NAVIGATION */}
    </Router>

export default router