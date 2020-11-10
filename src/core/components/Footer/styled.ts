import styled from 'styled-components'

import {Container }from 'common/components/Container'
import Flex from 'common/components/Flex'

export const FooterContain = styled(Flex)`
    padding: 15px 40px 0px 40px;
    margin-bottom: 20px;
    @media screen and (max-width:768px){
        padding: 0px 10px 0px 10px ;
        margin-bottom: 20px;
    }

`