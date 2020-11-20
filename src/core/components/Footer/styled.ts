import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const FooterContain = styled(Flex)`
	padding: 15px 40px 15px 40px;
	height:8vh;
	bottom: 0;
	@media screen and (max-width: 768px) {
		padding: 0px 10px 0px 10px;


	}
`
export const LicenseContainer = styled.div`
	/* border: 1px solid black; */
	width: 10rem;
	color: gray;
	@media screen and (max-width: 768px) {
		width: 5rem;
		font-size: 12px;
	}
`
