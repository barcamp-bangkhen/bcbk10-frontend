import React, { useCallback } from 'react'

import Link from 'next/link'

import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import { NavContainer, NavWrapper } from './styled'

const NavigationBar = () => {
  const setLocale = useSetLocale()

  const setLocaleTH = useCallback(() => {
    setLocale(Locale.th)
  }, [setLocale])

  const setLocaleEN = useCallback(() => {
    setLocale(Locale.en)
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
