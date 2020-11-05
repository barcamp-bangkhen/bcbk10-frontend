import styled from 'styled-components'

import { white } from 'common/styles/colors'

const ContentContainer = styled.div`
	padding: 24px;
	background-color: ${white};
	@media screen and (max-width: 768px){
		display: block;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height :50vh;
		
		
	}
`

export default ContentContainer
