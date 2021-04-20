//IMPORTS
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

//COMPONENTS
import Header from './modules/header'

const router = () =>
    <Router>
        {/* PUBLIC */}
        <Route path='/' exact component={Header} />
        {/* NAVIGATION */}
    </Router>

export default router