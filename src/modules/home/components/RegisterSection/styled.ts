import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'

export const Container = styled.div`
	// height: calc(100vh - ${NAV_BAR_HEIGHT}); optional
	height: 400px;
	/* width: 40%; */
	border: 1px solid black;
	/* align-items: center; */
	/* position:center; */

	@media (max-width: 768px){
		/* width: 90%; */
		/* padding-left: 50px;  */
		/* padding: 0 50px 0 0 ; */
	}
`

