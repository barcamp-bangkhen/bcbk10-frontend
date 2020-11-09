import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'

export const Container = styled.div`
	 //height: calc(100vh - ${NAV_BAR_HEIGHT}); optional
	height: 800px;
	/* border: 1px solid black; */
	@media screen and (max-width: 768px) {
		height: 620px;
	}
`

