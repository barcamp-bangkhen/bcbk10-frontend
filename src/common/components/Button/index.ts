import styled, {css} from 'styled-components'
import {white, black, red, whiteC  } from 'common/styles/colors'



const Button = styled.button`
    border: 2px solid ${whiteC};
    border-radius: 1.5rem ;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: ${red};
    color: ${whiteC};
    font-size: 28px;
    width: 22rem;
    height: 4rem;
    &:hover {
        background-color: ${whiteC};
        color: ${red};
    }

    @media screen and (max-width: 768px){
        width: 12rem;
        font-size: 15px;
    }

`


export default Button