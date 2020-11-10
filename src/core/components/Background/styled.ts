import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const BGWrapper = styled(Flex)``

const Background1 = styled.div`
    background: 
        url('/static/images/Artwork/background/triangle.png'),
        url('/static/images/Artwork/background/top_dot.png'),
        url('/static/images/Artwork/background/sparkle.png'),
        url('/static/images/Artwork/background/left_dot.png'),
        url('/static/images/Artwork/background/right_dot.png'),
        url('/static/images/Artwork/background/layer5.png'),
        url('/static/images/Artwork/background/layer4.png'),
        url('/static/images/Artwork/background/layer3.png'),
        url('/static/images/Artwork/background/layer2.png'),
        url('/static/images/Artwork/background/layer1.png'),
        url('/static/images/Artwork/background/right_circle.png'),
        url('/static/images/Artwork/background/left_circle.png'),
        url('/static/images/Artwork/background/bg.jpg');

    background-size: contain;
    /* border: 1px solid #000; */
`

export const Back = styled.img`
    content: url('/static/images/Artwork/background/bg.jpg');
    background-size: contain;
    /* background-color: red; */
`

const Layer1 = styled.div`
    background: url('/static/images/Artwork/background/layer1.png');
    background-size: contain;
`
const Layer2 = styled.div` 
    background: url('/static/images/Artwork/background/layer2.png');
    background-size: contain;
`

const Layer3 = styled.div` 
    background: url('/static/images/Artwork/background/layer3.png');
    background-size: contain;
`
const Layer4 = styled.div` 
    background: url('/static/images/Artwork/background/layer4.png');
    background-size: contain;
`
const Layer5 = styled.div` 
    background: url('/static/images/Artwork/background/layer5.png');
    background-size: contain;
`
const TopDot = styled.div`
    background: url('/static/images/Artwork/background/top_dot.png');
    background-size: contain;
`