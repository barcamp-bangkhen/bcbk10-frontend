import styled, {css} from 'styled-components'
import {white, black, red, whiteC  } from 'common/styles/colors'

export interface ButtonProps{
    shape?:
        |ShapeType
        |'circle'
        |'round-square'
}

export type ShapeType = 'circle' | 'round-square'

function defineProps({shape}: ButtonProps){
    let styled = ''

    if(shape){
        styled += css`
        border-radius: ${shape};
        `
    }
    return styled
}

const Button = styled.button<ButtonProps>`
    border: 2px solid ${whiteC};
    border-radius: ${({ shape }) => shape || ''};
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: ${red};
    color: ${whiteC};

    &:hover {
        background-color: ${whiteC};
        color: ${red};
    }
    ${defineProps}
`


export default Button