import styled from 'styled-components'

const Label = styled.label`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	border-bottom: 1px solid black;

	&:after {
		position: absolute;
		content: '';
		left: 0;
		bottom: -1px;
		border-bottom: 2px solid coral;
		width: 100%;
		height: 100%;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
	}
`

export default Label
