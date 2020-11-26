import React from 'react'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'
import HomeIcon from 'common/components/icons/HomeIcon'
import {RightDot, Sparkle, Triangle} from 'modules/root/components/Background/styled'

import LogoContainer  from './styled'


const RegisterSection = () => (
	<LogoContainer>
		<Flex alignItems="center" justifyContent="center" direction="column">
			<HomeIcon/> 
			<Button>REGISTER NOW</Button>
			{/* <RightDot/>
			<Sparkle/>
			<Triangle/> */}
		</Flex>
	</LogoContainer>

)

export default RegisterSection
