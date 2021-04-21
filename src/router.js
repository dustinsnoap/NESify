//IMPORTS
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//COMPONENTS
import Header from './modules/header'
import Examples from './modules/examples'

const router = () =>
    <Router>
        {/* PUBLIC */}
        <Route path='/' exact component={Header} />
        <Route path='/' exact component={Examples} />
        {/* NAVIGATION */}
    </Router>

export default router