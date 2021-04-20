//IMPORTS
import Styled from 'styled-components'
import landscape from './landscape'
import portrait from './portrait'

//STYLE
const Style = Styled.div`
    background-color: #3fbfff;
    font-family: pixel;
    display: flex;
        align-items: center;
        flex-direction: column;
        height: 30vh;
        justify-content: space-between;
        padding: 6vh 0;
        width: 100vw;
    .title {
        color: #c84c0c;
        font-family: pixel;
        font-size: 10vh;
    }
    .desc {
        color: #757575;
        font-size: 1.75vh;
    }
    .links {
        display: flex;
        justify-content: space-between;
        width: 67vw;
        .link {
            position: relative;
            color: #0000ab;
            font-size: 2.25vh;
        }
    }
    
    @media (orientation: landscape) {${landscape}}
    @media (orientation: portrait) {${portrait}}
`

//EXPORTS
export default Style
