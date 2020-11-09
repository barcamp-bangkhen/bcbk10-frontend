import styled from 'styled-components'

export const Checkmark = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	height: 1.5625rem;
	width: 1.5625rem;
	background-color: #eee;
	border-radius: 0.3125rem;
	transition: all 0.3s ease;

	&:after {
		content: '';
		position: absolute;
		display: none;
		left: 0.5625rem;
		top: 0.3125rem;
		width: 0.3125rem;
		height: 0.625rem;
		border: solid wheat;
		border-width: 0 0.1875rem 0.1875rem 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
`

export const Checkbox = styled.input.attrs({
	type: 'checkbox',
})`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;

	&:checked ~ ${Checkmark}:after {
		display: block;
	}
`

export const CheckboxLabel = styled.label`
	display: block;
	position: relative;
	padding-left: 2.1875rem;
	margin-bottom: 0.75rem;
	cursor: pointer;
	font: inherit;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	&:hover ${Checkbox} ~ ${Checkmark} {
		background-color: #ccc;
	}

	${Checkbox}:checked ~ ${Checkmark} {
		background-color: coral;
	}

	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`
