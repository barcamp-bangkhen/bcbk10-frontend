import styled from 'styled-components'

import Label from 'common/components/Label'
import Span from 'common/components/Span'

const TextInput = styled.input.attrs({
	type: 'text',
})`
	flex: 1;
	margin-top: 0.5rem;
	padding-top: 0.75rem;
	width: 100%;
	height: 2rem;
	font: inherit;
	position: relative;
	font-size: 1rem;
	border: none;
	outline: none;

	&:focus + ${Label}:after, &:not(:placeholder-shown) + ${Label}:after {
		transform: translateX(0%);
	}

	&:focus + ${Label} ${Span}, &:not(:placeholder-shown) + ${Label} ${Span} {
		transform: translateY(-120%);
		font-size: 0.9rem;
		color: coral;
	}
`

export default TextInput
