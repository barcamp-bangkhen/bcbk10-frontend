import styled from 'styled-components'

import Flex from 'common/components/Flex'

export const BGWrapper = styled(Flex)``

export const Back = styled.img`
	content: url('/static/images/Artwork/background/bg.jpg');
	background-size: contain;
	/* background-color: red; */
`

export const Layer1 = styled.img`
	content: url('/static/images/Artwork/background/layer1.png');
	/* background-size: contain; */
	position: absolute;
	width: 100%;
	z-index: -3;
	bottom: 0;
	left: 0;

	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
export const Layer2 = styled.img`
	content: url('/static/images/Artwork/background/layer2.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	bottom: 0;
	left: 0;

	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export const Layer3 = styled.img`
	content: url('/static/images/Artwork/background/layer3.png');
	position: absolute;
	width: 100%;
	z-index: -1;
	bottom: 0;
	left: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes wait {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
`
export const Layer4 = styled.img`
	content: url('/static/images/Artwork/background/layer4.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	top: 0;
	right: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
export const Layer5 = styled.img`
	content: url('/static/images/Artwork/background/layer5.png');
	position: absolute;
	width: 100%;
	z-index: -1;
	top: 0;
	right: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
export const TopDot = styled.img`
	content: url('/static/images/Artwork/background/top_dot.png');
	position: absolute;
	width: 100%;
	z-index: 0;
	/* top: ; */
`

export const LeftDot = styled.img`
	content: url('/static/images/Artwork/background/left_dot.png');
	position: absolute;
	width: 100%;
	z-index: 0;

	animation: flashing 3s infinite ease-out;
	@keyframes flashing {
		0% {
			color: red;
		}
		50% {
			color: lighten(red);
		}
		100% {
			color: red;
		}
	}
`

export const RightDot = styled.img`
	content: url('/static/images/Artwork/background/right_dot.png');
	position: absolute;
	width: 100%;
	z-index: 0;
	animation: flashing 3s infinite ease-out;
	@keyframes flashing {
		0% {
			/* opacity:1.0; */
			color: red;
		}
		50% {
			/* opacity: 0.5; */
			color: lighten(red);
		}
		100% {
			/* opacity: 1.0; */
			color: red;
		}
	}
`

export const Sparkle = styled.img`
	content: url('/static/images/Artwork/background/sparkle.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	animation: winkwup 10s infinite alternate ease-in-out;
	@keyframes winkwup{
		0%{
			opacity:1;
		}
		100%{
			opacity:0;
		}
	}

`

export const Triangle = styled.img`
	content: url('/static/images/Artwork/background/triangle.png');
	position: absolute;
	z-index: -1;
`

export const RightCircle = styled.img`
	content: url('/static/images/Artwork/background/left_circle.png');
	position: absolute;
	width: 100%;
	z-index: -4;
	left: 74rem;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`

export const LeftCircle = styled.img`
	content: url('/static/images/Artwork/background/left_circle.png');
	position: absolute;
	width: 100%;
	z-index: -4;
	bottom: 0px;
	left: 20px;

	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`
