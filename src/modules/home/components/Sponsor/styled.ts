import styled from 'styled-components'

const LEVEL_1_HEIGHT = '100px'
const LEVEL_2_HEIGHT = '120px'
const LEVEL_3_HEIGHT = '150px'

const Logo = styled.div`
	svg,
	img {
		box-sizing: border-box;
		padding: 16px 12px;
		margin: auto;
	}
`

export const Level1Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_1_HEIGHT};
	}
`

export const Level2Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_2_HEIGHT};
	}
`

export const Level3Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_3_HEIGHT};
	}
`
