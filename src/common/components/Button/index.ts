import styled from 'styled-components'
import {white, black, red, whiteC  } from 'common/styles/colors'



const Button = styled.button`
    cursor: pointer;
    border: 2px solid ${whiteC};
    border-radius: 1.5rem ;
    padding: 0.5rem 2rem;
    border: 0 ;
    background-color: ${red};
    color: ${whiteC};
    text-align: center;
    text-transform:uppercase;
    font-weight:bold;
    font-size: 24px;
    height: 4rem;
    outline:none;
    margin:10px;
    &:hover {
        background-color: ${whiteC};
        color: ${red};
    }

    @media screen and (max-width: 768px){
        font-size: 16px;
        height: 3rem;
        width:70%;
    }

`


export default Button