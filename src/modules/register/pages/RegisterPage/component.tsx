import React from 'react'

import ContentContainer from 'common/components/ContentContainer'

import RegisterForm from 'modules/register/components/RegisterForm'
import Flex from 'common/components/Flex'
import createMeta from './createMeta'
import { StoreContextProvider } from '../../context/store'

const RegisterPage = () => (
	<StoreContextProvider>
		<ContentContainer>
			{createMeta()}
			<Flex justifyContent={'center'}>
				<RegisterForm />
			</Flex>
		</ContentContainer>
	</StoreContextProvider>
)

export default RegisterPage
