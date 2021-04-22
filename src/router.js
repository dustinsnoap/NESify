//IMPORTS
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//COMPONENTS
import Header from './modules/header'
import Examples from './modules/examples'
import Demo from './modules/demo'

const router = () =>
    <Router>
        {/* PUBLIC */}
        <Route path='/' exact component={Header} />
        <Route path='/' exact component={Examples} />
        <Route path='/' exact component={Demo} />
        {/* NAVIGATION */}
    </Router>

export default router