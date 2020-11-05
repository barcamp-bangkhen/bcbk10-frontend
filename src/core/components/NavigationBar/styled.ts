import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

export const NAV_BAR_HEIGHT = '64px'

export const NavContainer = styled(Flex)`
	width: 1000px;
	height: ${NAV_BAR_HEIGHT};
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
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavLogo = styled.div`
	display: inline;
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
`

export const Gaps = styled(Gap)`
	@media screen and (max-width: 768px) {
		display: none;
	}
`
