//IMPORTS
import Styled from 'styled-components'
import landscape from './landscape'
import portrait from './portrait'

//STYLE
const Style = Styled.div`
    display: flex;
        align-items: center;
        justify-content: center;
    .carousel {
        display: flex;
        align-items: center;
        .nav {
            background-color: red;
            height: 100px;
            width: 100px;
        }
        .images {
            width: 50vh;
            height: 50vh;
            position: relative;
            figure {
                background-size: cover;
                image-rendering: pixelated;
                position: absolute;
                height: 100%;
                width: 100%;
                &.original {
                    border-right: 5px solid black;
                }
            }
        }
    }
    @media (orientation: landscape) {${landscape}}
    @media (orientation: portrait) {${portrait}}
`

//EXPORTS
export default Style
