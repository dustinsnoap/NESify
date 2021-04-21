//IMPORTS
import React, {Component} from 'react'

//COMPONENTS
//ASSETS
import ex1 from '../../assets/ex1.jpg'
import ex1after from '../../assets/ex1rc1.png'

//STYLE
import Style from './style'

//MODULE
class Examples extends Component {
    state = {}
    move_mouse = e => {
        const images = e.currentTarget
        const bounds = images.getBoundingClientRect()
        const x = e.pageX
        const width = e.pageX - bounds.x
        const original_image = images.getElementsByClassName('original')[0]
        original_image.style.width = `${width}px`
    }
    render = () =>
        <Style className='examples'>
            <div className='carousel'>
                <div className='nav left'>
                    <figure className='arrow'></figure>
                </div>
                <div className='images' onMouseMove={this.move_mouse}>
                    <figure className='nesified' style={{backgroundImage: `url(${ex1after})`}} />
                    <figure className='original' style={{backgroundImage: `url(${ex1})`}} />
                </div>
                <div className='nav right'>
                    <figure className='arrow'></figure>
                </div>
            </div>
        </Style>
}

//EXPORTS
export default Examples