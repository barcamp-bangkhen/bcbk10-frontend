import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const FooterContain = styled(Flex)`
    padding: 15px 40px 0px 40px;
    margin-bottom:10px;

    @media screen and (max-width:768px){
        padding: 0px 10px 0px 10px ;
        margin-bottom: 10px;
    }
`