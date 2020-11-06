import styled from 'styled-components'

const LEVEL_1_HEIGHT = '12vh' // 100px
const LEVEL_2_HEIGHT = '15vh' // 120px
const LEVEL_3_HEIGHT = '18vh' // 150px

const Logo = styled.div`
	svg,
	img {
		box-sizing: border-box;
		padding: 16px 12px;
		margin: auto;
		border: 1px solid black;
	}
`

export const Level1Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_1_HEIGHT};
		@media screen and (max-width: 768px) {
			height:8vh;
			width: auto;
		}
	}
`

export const Level2Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_2_HEIGHT};
		@media screen and (max-width: 768px) {
			height: 10vh;
			width: auto;
		}
	}
`

export const Level3Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_3_HEIGHT};
		@media screen and (max-width: 768px) {
			height: 12vh;
			width: auto;
		}
	}
`
