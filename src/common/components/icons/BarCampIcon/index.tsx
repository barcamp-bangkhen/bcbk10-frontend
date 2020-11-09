import styled from 'styled-components'

const BarCampIcon = styled.img`
	content: url('/static/images/Artwork/logo.png');
	height: 8vh;
	width: auto;
	float: left;
	padding-top: 2px;

	@media screen and(max-width: 768px) {
		float: left;
		display: inline;
		top: 0;
		transform: translate(-100%, 75%);
		cursor: pointer;
	}
`

export default BarCampIcon
