import styled from 'styled-components'

export function topFunction() {
	document.body.scrollIntoView({ behavior: 'smooth' })
}

const FireIcon = styled.img`
	content: url('/static/images/Artwork/fire.png');
	height: 64px;
	scroll-behavior: smooth;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		height: 42px;
	}
`
export default FireIcon
