import React from 'react'

import Button from 'common/components/Button'
import Flex from 'common/components/Flex'

import { Container } from './styled'

const RegisterSection = () => (
	<Container>
		<Flex alignItems="center" justifyContent="center" direction="column">
			<Button>Register</Button>
		</Flex>
	</Container>
)

export default RegisterSection
