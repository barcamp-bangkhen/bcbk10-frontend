import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'

import RegisterForm from 'modules/register/components/RegisterForm'

import { StoreContextProvider } from '../../context/store'

import createMeta from './createMeta'

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
