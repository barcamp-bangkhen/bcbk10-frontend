import React from 'react'

import Flex from 'common/components/Flex'
import {Container} from 'common/components/Container'

import FireIcon from 'common/components/icons/FireIcon'

import Contact from 'modules/home/components/Contact'


const Footer =() =>{
    return(
        // <Container>
        // {/* <div style={{border:"1px solid black"}}>  */}
            <Flex alignItems='center' justifyContent='space-between' direction='row'>
                    <Contact/>
                    <FireIcon/>
                    @barcamp2020
            </Flex>
        // {/* </div> */}
        // {/* </Container>  */}
    )
}

export default Footer