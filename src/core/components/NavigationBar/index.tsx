import React, { useCallback } from 'react'
import Link from 'next/link'
import { NavContainer, NavWrapper } from './styled'
import Gap from 'common/components/Gap'
import useChangeLocale from 'core/i18n/hooks/useChangeLocale'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

const NavigationBar = () => {
  const { setLocale } = useChangeLocale()

  const setLocaleTH = useCallback(() => {
    setLocale('th')
  }, [setLocale])

  const setLocaleEN = useCallback(() => {
    setLocale('en')
  }, [setLocale])

  return (
    <NavWrapper justifyContent="center">
      <NavContainer alignItems="center" justifyContent="space-between">
        <Gap size="16px" alignCenter>
          <Link href="/">Home</Link>
          <Link href="/register">Register</Link>
        </Gap>
        <Text as="div" size="14px" color={gray[700]}>
          <Gap size="4px" alignCenter>
            <Text onClick={setLocaleTH}>th</Text>
            <div>|</div>
            <Text onClick={setLocaleEN}>en</Text>
          </Gap>
        </Text>
      </NavContainer>
    </NavWrapper>
  )
}

export default NavigationBar
