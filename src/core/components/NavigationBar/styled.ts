import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

export const NAV_BAR_HEIGHT = '64px'

export const NavContainer = styled(Flex)`
	width: 100vw;
	height: ${NAV_BAR_HEIGHT};
	position: fixed;
	top: 0;
	@media screen and (max-width: 768px) {
		width: 100vw;
	}
	background-color: #f4e9da;
`

export const NavWrapper = styled(Flex)``

export const NavLink = styled.a`
	color: #433f4f;
	font-size: 1.5vw;
	&:hover {
		color: #da6353;
		text-decoration: underline;
	}

	@media screen and (max-width: 1024px) {
		font-size: 2.5vw;
	}
`
export const Bars = styled(FaBars)`
	display: none;
	float: right;
	font-size: 1.5rem;
	color: black;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: inline;
		position: absolute;
		right: 0;
	}
`

export const MenuGap = styled(Gap)`
	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const LangGap = styled(Gap)`
	@media screen and (max-width: 768px) {
		display: none;
	}
	@media screen and (max-width: 1024px) {
		font-size: 2vw;
	}
`
