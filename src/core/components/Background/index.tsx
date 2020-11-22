import React from 'react'

import {
	BG,
	BackgroundWrapper,
	Layer1,
	Layer2,
	Layer3,
	Layer4,
	Layer5,
	RightDot,
	Sparkle,
	Triangle,

} from './styled'

const Background = () => {
	// const isMobile = useMediaQuery({
	// 	maxWidth:768
	// })

	// if(isMobile){
	// 	return(
	// 		<BackgroundWrapper>
	// 			<BG />
	// 		</BackgroundWrapper>
	// 	)
	// }
	return (

		<BackgroundWrapper>
			{/* <RightCircle /> */}
			{/* <LeftCircle /> */}
			<Triangle />
			<Sparkle />
			<RightDot />
			{/* <LeftDot /> */}
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
