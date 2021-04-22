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
            height: 5.5vh;
            width: 7vh;
            &.left {
                transform: rotate(180deg);
            }
        }
        .images {
            width: 50vh;
            height: 50vh;
            position: relative;
            figure {
                background-size: cover;
                image-rendering: pixelated;
                fill: red;
                position: absolute;
                height: 100%;
                width: 100%;
                &.original {
                    border-right: 5px solid #222323;
                }
            }
        }
    }
    @media (orientation: landscape) {${landscape}}
    @media (orientation: portrait) {${portrait}}
`

//EXPORTS
export default Style
