import React, { useCallback, useState } from 'react'


import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import {Bars, NavContainer, NavLink, NavWrapper} from './styled'
import Link from 'next/link'

const NavigationBar = ({toggle} : {toggle:any})=> {

  const setLocale = useSetLocale()

  const setLocaleTH = useCallback(() => {
    setLocale(Locale.th)
  }, [setLocale])

  const setLocaleEN = useCallback(() => {
    setLocale(Locale.en)
  }, [setLocale])

  return (
    <NavWrapper justifyContent="center">
      <NavContainer alignItems="center" justifyContent="space-between" >
        <Bars onClick = {toggle.toggle}/>
        <Gap size="4rem" alignCenter>
            <Link href="/" passHref><NavLink>Timetable</NavLink></Link>
            <Link href="/" passHref><NavLink>Sponsors</NavLink></Link>
            <Link href="/" passHref><NavLink>FAQS</NavLink></Link>
            <Link href="/" passHref><NavLink>Session</NavLink></Link>
            <Link href="/register" passHref><NavLink>Register</NavLink></Link>
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
