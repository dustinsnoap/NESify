//IMPORTS
import React, {Component} from 'react'
import SVG from 'react-inlinesvg'

//COMPONENTS
//ASSETS
//misc
import Arrow from '../../assets/misc/right_arrow.svg'
import ArrowHover from '../../assets/misc/right_arrow_hover.svg'
//examples
import exo1 from '../../assets/examples/exo1.png'
import exr1 from '../../assets/examples/exr1.png'
import exo2 from '../../assets/examples/exo2.jpg'
import exr2 from '../../assets/examples/exr2.png'

//STYLE
import Style from './style'

//MODULE
class Examples extends Component {
    state = {
        left_arrow: Arrow,
        right_arrow: Arrow,
        example_index: 0,
        examples: [
            {original: exo1, result: exr1, desc: 'Reduced height down to 240px and set colors the stardard palette of 64 colors.'},
            {original: exo2, result: exr2, desc: 'Reduced the color palette to the NES max potential of 448 colors.'},
        ]
    }
    transform_image = e => {
        const images = e.currentTarget
        const bounds = images.getBoundingClientRect()
        const width = e.pageX - bounds.x
        const original_image = images.getElementsByClassName('original')[0]
        original_image.style.width = `${Math.min(width+2.5, bounds.width)}px`
    }
    arrow_click_down = e => {
        const container = e.currentTarget
        const direction = container.classList.contains('left') ? 'left' : 'right'
        this.setState({[`${direction}_arrow`]: ArrowHover})
    }
    arrow_click_up = e => {
        const container = e.currentTarget
        const direction = container.classList.contains('left') ? 'left' : 'right'
        const index = this.state.example_index + 1 > this.state.examples.length-1 ? 0 : this.state.example_index + 1
        this.setState({[`${direction}_arrow`]: Arrow, example_index: index})
    }
    get_image = () => this.state.examples[this.state.example_index]
    render = () =>
        <Style className='examples'>
            <div className='carousel'>
                <div className='nav left' onMouseDown={this.arrow_click_down} onMouseUp={this.arrow_click_up}>
                    <SVG src={this.state.left_arrow} />
                </div>
                <div className='images' onMouseMove={this.transform_image}>
                    <figure className='nesified' style={{backgroundImage: `url(${this.get_image().result})`}} />
                    <figure className='original' style={{backgroundImage: `url(${this.get_image().original})`}} />
                </div>
                <div className='nav right' onMouseDown={this.arrow_click_down} onMouseUp={this.arrow_click_up}>
                    <SVG src={this.state.right_arrow} />
                </div>
            </div>
            <span className='description'>{this.state.examples[this.state.example_index].desc}</span>
        </Style>
}

//EXPORTS
export default Examples