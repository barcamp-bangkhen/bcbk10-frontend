import styled, { keyframes } from 'styled-components'

import Flex from 'common/components/Flex'
import { css } from 'styled-components'

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

export const Layer1 = styled.img`
    content: url('/static/images/Artwork/background/layer1.png');
    /* background-size: contain; */
    position: absolute ;
    width: 100%;
    z-index: -3;
    bottom:0 ;
    left:0;

    animation: fade 7s infinite ease-in-out ;
    @keyframes fade{
        0%{
            opacity:1.0;
        }
        50%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }
`
export const Layer2 = styled.img` 
    content: url('/static/images/Artwork/background/layer2.png');
    position: absolute ;
    width: 100%;
    z-index: -2;
    bottom:0 ;
    left:0;

    animation: fade 7s infinite ease-in-out ;
    @keyframes fade{
        0%{
            opacity:1.0;
        }
        50%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }
`

export const Layer3 = styled.img` 
    content: url('/static/images/Artwork/background/layer3.png');
    position: absolute ;
    width: 100%;
    z-index: -1;
    bottom:0 ;
    left:0;
    animation: fade 7s infinite ease-in-out ;
    @keyframes fade{
        0%{
            opacity:1.0;
        }
        50%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }

    @keyframes wait{
        0%{
            opacity:1.0;
        }
        100%{
            opacity:1.0;
        }
    }
`
export const Layer4 = styled.img` 
    content: url('/static/images/Artwork/background/layer4.png');
    position: absolute ;
    width: 100%;
    z-index: -2;
    top:0;
    right:0;
    animation: fade 7s infinite ease-in-out ;
    @keyframes fade{
        0%{
            opacity:1.0;
        }
        50%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }

`
export const Layer5 = styled.img` 
    content: url('/static/images/Artwork/background/layer5.png');
    position: absolute ;
    width: 100%;
    z-index: -1;
    top:0;
    right:0;
    animation: fade 7s infinite ease-in-out ;
    @keyframes fade{
        0%{
            opacity:1.0;
        }
        50%{
            opacity: 0.0;
        }
        100%{
            opacity: 1.0;
        }
    }

`
export const TopDot = styled.img`
    content: url('/static/images/Artwork/background/top_dot.png');
    position: absolute ;
    width: 100%;
    z-index: 0;
    /* top: ; */

`

export const LeftDot = styled.img`
    content: url('/static/images/Artwork/background/left_dot.png');
    position: absolute ;
    border: 1px solid black;
    width: 100%;
    z-index: 0;

    animation: flashing 3s infinite ease-out;
    @keyframes flashing{
        0%{
            color:red;
        }
        50% {
            color: lighten(red);
        }
        100% {
            color: red;
        }
    }
`

export const RightDot = styled.img`
    content: url('/static/images/Artwork/background/right_dot.png');
    position: absolute ;
    border: 1px solid black;
    width: 100%;
    z-index: 0;
    animation: flashing 3s infinite ease-out;
    @keyframes flashing{
        0%{
            /* opacity:1.0; */
            color:red;
        }
        50% {
            /* opacity: 0.5; */
            color: lighten(red);
        }
        100% {
            /* opacity: 1.0; */
            color: red;
            
        }

}
`