import React from 'react'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'
import HomeIcon from 'common/components/icons/HomeIcon'

import { Container } from './styled'

const ICON_SIZE = 1

const RegisterSection = () => (
	<Container>
		<Flex alignItems="center" justifyContent="center" direction="column">
			<HomeIcon/> 
			<Button>Register Now</Button>
		</Flex>
	</Container>
)

export default RegisterSection
