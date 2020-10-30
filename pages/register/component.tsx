import React from 'react'
import createMeta from './createMeta'
import ContentContainer from 'common/components/ContentContainer'

const Register = () => {
  return (
    <ContentContainer>
      {createMeta()}
      <h1>Register Page</h1>
    </ContentContainer>
  )
}

export default Register
