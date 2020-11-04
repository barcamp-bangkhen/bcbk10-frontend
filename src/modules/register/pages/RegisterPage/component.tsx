import React from 'react'

import ContentContainer from 'common/components/ContentContainer'

import RegisterForm from 'modules/register/components/RegisterForm'
import Flex from 'common/components/Flex'
import createMeta from './createMeta'

const RegisterPage = () => (
    <ContentContainer>
      {createMeta()}
      <Flex justifyContent={'center'}>
          <RegisterForm/>
      </Flex>
    </ContentContainer>
  )

export default RegisterPage
