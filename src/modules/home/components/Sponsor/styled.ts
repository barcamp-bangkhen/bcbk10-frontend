import styled from 'styled-components'
const LEVEL_1_HEIGHT = '12vw' // 100px
const LEVEL_2_HEIGHT = '15vw' // 120px
const LEVEL_3_HEIGHT = '25vw' // 150px




const Logo = styled.div`
	svg,
	img {
		box-sizing: border-box;
		padding: 16px 12px;
		margin: auto;
		margin-top: 1em;
		padding-bottom: 2em;
	}
`

export const Level1Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_1_HEIGHT};
		@media screen and (orientation:portrait) and (max-width: 768px) {
			height: 28vw;
		}
		@media screen and (orientation:landscape) and (max-width: 768px){
			height:100px;
		}
	}
`

export const Level2Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_2_HEIGHT};
		@media screen and (orientation:portrait) and (max-width: 768px) {
			height: 30vw;
		}
		@media screen and (orientation:landscape) and (max-width: 768px){
			height:120px;
		}
	}
`

export const Level3Container = styled(Logo)`
	svg,
	img {
		height: ${LEVEL_3_HEIGHT};

		@media screen and (orientation:portrait) and (max-width: 768px) {
			height: 50vw;
		}
		@media screen and (orientation:landscape) and (max-width: 768px){
			height: 180px;
		}

	}
`
