import styled from 'styled-components'

import {orange} from 'common/styles/colors'
import Flex from 'common/components/Flex'

export const FooterContain = styled(Flex)`
	padding: 15px 40px 15px 40px;
	height:8vh;
	bottom: 0;
	background-color:${orange};
	@media screen and (max-width: 768px) {
		padding: 0px 10px 0px 10px;


	}
`
export const LicenseContainer = styled.div`
	width: 12rem;
	color: gray;
	@media screen and (max-width: 768px) {
		width: 5rem;
		font-size: 12px;
	}
`
