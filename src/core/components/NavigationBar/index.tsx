import React from 'react'
import Link from 'next/link'
import { NavContainer } from './styled'
import Gap from 'common/components/Gap'

const NavigationBar = () => {
  return (
    <NavContainer alignItems="center">
      <div>
        <Gap size="16px" alignCenter>
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
        </Gap>
      </div>
    </NavContainer>
  )
}

export default NavigationBar
