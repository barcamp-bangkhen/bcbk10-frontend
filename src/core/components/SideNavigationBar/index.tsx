import React, { useCallback } from 'react'

import Link from 'next/link'

import useI18n from 'core/i18n/hooks/useI18n'
import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import { TIME_TABLE, FAQS, SESSION, REGISTER } from './locales'
import { CloseIcon, SideBarContainer, NavLink, SideBarMenu, Icon, Lang } from './styled'

const SideNavigationBar = ({ toggle }: { toggle: any }) => {
	const setLocale = useSetLocale()

	const setLocaleTH = useCallback(() => {
		setLocale(Locale.th)
	}, [setLocale])

	const setLocaleEN = useCallback(() => {
		setLocale(Locale.en)
	}, [setLocale])

	const I18n = useI18n()

	return (
		<SideBarContainer isOpen={toggle.isOpen}>
			<Icon>
				<CloseIcon onClick={toggle.toggle} />
			</Icon>
			<SideBarMenu onClick={toggle.toggle}>
				<Link href="/" passHref>
					<NavLink>{I18n.t(TIME_TABLE)}</NavLink>
				</Link>
				<Link href="/" passHref>
					<NavLink>{I18n.t(FAQS)}</NavLink>
				</Link>
				<Link href="/" passHref>
					<NavLink>{I18n.t(SESSION)}</NavLink>
				</Link>
				<Link href="/register" passHref>
					<NavLink>{I18n.t(REGISTER)}</NavLink>
				</Link>
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
