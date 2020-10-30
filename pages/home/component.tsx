import ContentContainer from 'common/components/ContentContainer'
import React from 'react'
import createMeta from './createMeta'

const Home = () => {
  return (
    <ContentContainer>
      {createMeta()}
      <h1>Home Page</h1>
    </ContentContainer>
  )
}

export default Home
