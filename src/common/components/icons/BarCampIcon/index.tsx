import styled from 'styled-components'

const BarCampIcon = styled.img`
	content: url('/static/images/Artwork/logo.png');
	height: 64px;
	width: auto;
	float: left;
	
	@media screen and(max-width: 768px) {
		display: inline;
		top: 0;
		transform: translate(-100%, 75%);
		cursor: pointer;
	}
`

export default BarCampIcon
