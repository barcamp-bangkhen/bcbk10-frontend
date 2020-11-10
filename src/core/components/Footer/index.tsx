import React from 'react'

import Flex from 'common/components/Flex'
import {Container} from 'common/components/Container'

import Contact from 'common/components/Contact'

import FireIcon from 'common/components/icons/FireIcon'

import {FooterContain} from './styled'


const Footer =() =>{
    return(
        // <div style={{border:"1px solid black"}}>
                    <FooterContain alignItems='center' justifyContent='space-between' direction='row'>
            {/* <Flex alignItems='center' justifyContent='space-between' direction='row'> */}
  
                    <Contact/>
                    <FireIcon/>
                    @barcamp2020

            {/* </Flex> */}
        </FooterContain>
        // </div>

    )
}

export default Footer