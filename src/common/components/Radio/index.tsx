import styled from 'styled-components'

export const Radio = styled.input.attrs({
	type: 'radio',
})`
	position: absolute;
	opacity: 0;
	cursor: pointer;
`

export const Circle = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 25px;
	width: 25px;
	background-color: #eee;
	border-radius: 50%;
	border: ${(props) => (props.error ? '1px solid coral' : '')};
	transition: all 0.3s ease;

	&:after {
		content: '';
		position: absolute;
		display: none;
		top: 9px;
		left: 9px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: wheat;
	}
`

export const RadioLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover ${Radio} ~ ${Circle} {
		background-color: #ccc;
	}

	${Radio}:checked ~ ${Circle} {
		background-color: coral;
	}

	${Radio}:checked ~ ${Circle}:after {
		display: block;
	}
`
