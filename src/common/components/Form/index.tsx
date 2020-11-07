import styled from 'styled-components'

const Form = styled.form`
	padding: 3rem;
	border-radius: 0 0 1rem 1rem;

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 1rem 3rem;
		font-size: 0.8rem;
	}
`

export default Form
