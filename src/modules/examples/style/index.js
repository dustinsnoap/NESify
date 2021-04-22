//IMPORTS
import Styled from 'styled-components'
import landscape from './landscape'
import portrait from './portrait'

//STYLE
const Style = Styled.div`
    background-color: #432f00;
    display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 67vh;
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
            margin: 0 5vw;
            figure {
                background-size: cover;
                image-rendering: pixelated;
                height: 100%;
                width: 100%;
                &.original {
                    position: absolute;
                    transform: translateY(-100%);    
                    border-right: 5px solid #222323;
                }
            }
        }
    }
    .description {
        width: 50vh;
        font-family: pixel;
        font-size: 1.5vh;
        color: #f0f6f0;
        margin-top: 2.5vh;
    }
    @media (orientation: landscape) {${landscape}}
    @media (orientation: portrait) {${portrait}}
`

//EXPORTS
export default Style
