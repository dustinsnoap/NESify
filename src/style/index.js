// IMPORTS
import {createGlobalStyle} from 'styled-components'

// COMPONENTS
import reset from './reset'
import fonts from './fonts'
import common from './common'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    ${common}

    body {
        background-color: #111;
        color: #ccc;
    }
`