//IMPORTS
import Styled from 'styled-components'
import landscape from './landscape'
import portrait from './portrait'

//STYLE
const Style = Styled.div`    
    @media (orientation: landscape) {${landscape}}
    @media (orientation: portrait) {${portrait}}
`

//EXPORTS
export default Style
