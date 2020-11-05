import React, { useCallback } from 'react'

import { CloseIcon, SideBarContainer, NavLink, SideBarMenu, Icon, Lang } from './styled'
import Link from 'next/link'
import Text from 'common/components/Text'
import { Locale } from 'core/i18n/types';

import useSetLocale from 'core/i18n/hooks/useSetLocale'

const SideNavigationBar = ({ toggle }: { toggle: any }) => {

  const setLocale = useSetLocale()

  const setLocaleTH = useCallback(() => {
    setLocale(Locale.th)
  }, [setLocale])

  const setLocaleEN = useCallback(() => {
    setLocale(Locale.en)
  }, [setLocale])

  return (
    <SideBarContainer isOpen={toggle.isOpen}>
      <Icon>
        <CloseIcon onClick={toggle.toggle} />
      </Icon>
      <SideBarMenu onClick={toggle.toggle}>
        <Link href="/" passHref><NavLink>Timetable</NavLink></Link>
        <Link href="/" passHref><NavLink>Sponsors</NavLink></Link>
        <Link href="/" passHref><NavLink>FAQS</NavLink></Link>
        <Link href="/" passHref><NavLink>Session</NavLink></Link>
        <Link href="/register" passHref><NavLink>Register</NavLink></Link>
      </SideBarMenu>
      <Lang>
        <NavLink onClick={setLocaleTH}>th</NavLink>
        <div>|</div>
        <NavLink onClick={setLocaleEN}>en</NavLink>
      </Lang>
    </SideBarContainer>

  )
}

export default SideNavigationBar