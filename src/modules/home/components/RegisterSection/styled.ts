import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'

export const Container = styled.div`
	// height: calc(100vh - ${NAV_BAR_HEIGHT}); optional
	height: 400px;
`
export const RegisButton = styled.button`
	color: orange;
	padding: 10px;
`
export const BarCampLogo = styled.div`
	background-image: url($logo-location);
`
