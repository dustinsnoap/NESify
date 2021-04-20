//IMPORTS
import React from 'react'

//COMPONENTS
//ASSETS

//STYLE
import Style from './style'

//MODULE
const Home = () =>
    <Style className='header'>
        <h1 className='title'>NESify</h1>
        <p className='desc'>Convert images to NES graphics.</p>
        <div className='links'>
            <a className='link' href='www.google.com'>Try It</a>
            <a className='link' href='www.google.com'>Examples</a>
            <a className='link' href='https://github.com/dustinsnoap/NESify'>Github</a>
        </div>
    </Style>

//EXPORTS
export default Home