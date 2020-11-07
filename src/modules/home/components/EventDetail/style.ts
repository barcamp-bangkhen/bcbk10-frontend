import styled from 'styled-components'

import Flex from 'common/components/Flex'


export const TextFlex = styled(Flex)`
    @media screen and (max-width: 768){
        white-space: pre-wrap; 
        font-size: 10px;
        .mobile {display:inline}
    }
`
