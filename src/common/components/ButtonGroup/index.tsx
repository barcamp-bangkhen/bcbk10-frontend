import styled from 'styled-components'

export const Button = styled.button`
	font: inherit;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	width: 10rem;
	background: transparent;
	border: 1px solid coral;
	cursor: pointer;
	transition: all 0.3s ease;

	@media screen and (max-width: 768px) {
		width: 6rem;
		text-align: center;
	}
`

export const NextButton = styled(Button)`
	float: right;
	background: rgba(255, 127, 80, 0.2);
	color: coral;

	&:hover {
		background: #ff7f50;
		color: white;
	}
`

export const PreviousButton = styled(Button)`
	background: rgba(255, 127, 80, 0.2);
	color: coral;
	visibility: ${(props) => props.visibility};

	&:hover {
		background: #ff7f50;
		color: white;
	}
`

export const SubmitButton = styled(Button)`
	float: right;
	color: coral;

	&:hover {
		background: #ff7f50;
		color: white;
	}
`

export const ButtonGroup = styled.div`
	padding: 1rem;

	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
	}
`
