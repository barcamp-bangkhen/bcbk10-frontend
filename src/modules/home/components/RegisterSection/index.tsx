import React from 'react'
import Link from 'next/link'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'
import HomeIcon from 'common/components/icons/HomeIcon'


import LogoContainer  from './styled'


const RegisterSection = () => (
	<LogoContainer>
		<Flex alignItems="center" justifyContent="center" direction="column">
			<HomeIcon/> 
			<a href="https://forms.gle/tDkHRRZNZGNHshBf6" target="_blank">	<Button>REGISTER NOW</Button></a>
			{/* <RightDot/>
			<Sparkle/>
			<Triangle/> */}
		</Flex>
	</LogoContainer>

)

export default RegisterSection
