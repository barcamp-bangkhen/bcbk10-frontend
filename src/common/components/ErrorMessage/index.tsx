import styled from 'styled-components'

const ErrorMessage = styled.span`
	position: absolute;
	left: 1.5rem;
	font-size: 0.8rem;
	bottom: ${(props) => (props.show ? '-0.5rem' : '0rem')};
	opacity: ${(props) => (props.show ? '100%' : '0%')};
	color: #ff7f50;
	transition: bottom 0.3s ease-out, opacity 0.3s ease-out;
`

export default ErrorMessage
