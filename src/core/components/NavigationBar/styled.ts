import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

export const NAV_BAR_HEIGHT = '64px'

export const NavContainer = styled(Flex)`
	width: 1920px;
	height: ${NAV_BAR_HEIGHT};
	border: 1px solid black;
	position: fixed;
	top: 0;
`

export const NavWrapper = styled(Flex)``

export const NavLink = styled.a`
	color: #433f4f;
	&:hover {
		color: #da6353;
	}
`
export const Bars = styled(FaBars)`
	display: none;
	color: black;

	@media screen and (max-width: 768px) {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
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
`
