import React from 'react'

import Flex from 'common/components/Flex'
import BarCampIcon from 'common/components/icons/BarCampIcon'

import Contact from 'modules/home/components/Contact'

const ICON_SIZE = 24

const Footer =() =>{
    return(
        <Flex alignItems='flex-start' justifyContent='space-between' direction='row'>

            <Contact/>
            <BarCampIcon size={ICON_SIZE}/>
            @barcamp2020
        
        </Flex>
    )

}

export default Footer