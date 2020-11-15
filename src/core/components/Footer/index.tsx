import React from 'react'

import Contact from 'common/components/Contact'


import FireIcon from 'common/components/icons/FireIcon'

import {FooterContain} from './styled'



const Footer =() =>{

    return(
        <FooterContain alignItems='center' justifyContent='space-between' direction='row'>
            <Contact/>
            <FireIcon/>
            @barcamp2020
        </FooterContain>
    

    )
}

export default Footer