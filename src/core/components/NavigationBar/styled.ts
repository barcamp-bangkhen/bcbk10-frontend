import styled from 'styled-components'

import Flex from 'common/components/Flex'

import { FaBars } from 'react-icons/fa'

export const NAV_BAR_HEIGHT = '64px'

export const NavContainer = styled(Flex)`
  width: 1000px;
  height: ${NAV_BAR_HEIGHT};
`

export const NavWrapper = styled(Flex)`
`

export const NavLink = styled.a `
  color: #433f4f;
  &:hover {
    color: #da6353;
  } 
`
export const Bars = styled(FaBars) `
    display: none;
    color: black;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0; 
    transform: translate(-100%, 75%); 
    font-size: 1.8rem;
    cursor: pointer; 
  }
`
