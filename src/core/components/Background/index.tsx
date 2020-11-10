import React from 'react'
// import { injectGlobal } from 'styled-components'

import {Back, BGWrapper} from './styled'
import styled, { createGlobalStyle } from 'styled-components'


export const Background = createGlobalStyle`

    body{
        background-image: url('/static/images/Artwork/background/bg.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
`


// const Background= () => {
//     return(
//         <Back/>
//     )
// }

export default Background
