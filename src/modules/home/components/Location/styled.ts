import styled from 'styled-components'

export const MapDiv = styled.iframe`
	width: 90%;
	height: 680px;
	border: none;
	margin: 1em auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		max-height: 480px;
	}
`
