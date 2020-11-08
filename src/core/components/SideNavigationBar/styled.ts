import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

export const SideBarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	background-color: #fed8b1;
`

export const CloseIcon = styled(FaTimes)`
	color: black;
`

export const NavLink = styled.a`
	color: #433f4f;
	font-size: 1em;
	&:hover {
		color: #da6353;
	}
`

export const SideBarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;
	margin-top: 3em;
	@media screen and (max-width: 768px) {
		grid-template-rows: repeat(6, 80px);
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 50vh;
		padding-right: 7.6%;
		&:hover {
			color: #da6353;
		}
	}
`

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 1.5rem;
	cursor: pointer;
	outline: none;
`

export const Lang = styled.div`
	display: flex;
	justify-content: space-evenly;
	cursor: pointer;
`
