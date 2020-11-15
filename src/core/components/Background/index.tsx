import React from 'react'
// import { injectGlobal } from 'styled-components'

import styled, { createGlobalStyle } from 'styled-components'

import {
	Layer1,
	Layer2,
	Layer3,
	Layer4,
	Layer5,
	TopDot,
	LeftDot,
	RightDot,
	Sparkle,
	Triangle,
	LeftCircle,
	RightCircle,
} from './styled'

const BG = createGlobalStyle`
    body{
        background-image: url('/static/images/Artwork/background/bg.jpg');
        /* background-image: var(--layer-2); */
        background-repeat: no-repeat;
        background-attachment:  fixed;
    }
`
const BackgroundWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -10;
`

const Background = () => {
	return (
		<BackgroundWrapper>
			<RightCircle />
			<LeftCircle />
			<Triangle />
			<Sparkle />
			<RightDot />
			<LeftDot />
			<TopDot />
			<Layer5 />
			<Layer4 />
			<Layer3 />
			<Layer2 />
			<Layer1 />
			<BG />
		</BackgroundWrapper>
	)
}

export default Background
