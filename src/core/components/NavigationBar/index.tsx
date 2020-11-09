import React, { useCallback } from 'react'

import Link from 'next/link'

import useI18n from 'core/i18n/hooks/useI18n'
import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import BarCampIcon from '../../../common/components/icons/BarCampIcon'

import { TIME_TABLE, FAQS, SESSION, REGISTER } from './locales'
import { Bars, NavContainer, NavLink, NavWrapper, MenuGap, LangGap } from './styled'

const NavigationBar = ({ toggle }: { toggle: any }) => {
	const setLocale = useSetLocale()

	const setLocaleTH = useCallback(() => {
		setLocale(Locale.th)
	}, [setLocale])

	const setLocaleEN = useCallback(() => {
		setLocale(Locale.en)
	}, [setLocale])

	const I18n = useI18n()
	return (
		<NavWrapper justifyContent="center">
			<NavContainer alignItems="center" justifyContent="space-between">
				<BarCampIcon />
				<Bars onClick={toggle.toggle} />

				<MenuGap size="6rem" alignCenter>
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
				</MenuGap>

				<Text as="div" size="1.2vw" color={gray[700]} margin={'0px 20px 0px 0px'}>
					<LangGap size="1.5vw">
						<Text onClick={setLocaleTH}>th</Text>
						<div>|</div>
						<Text onClick={setLocaleEN}>en</Text>
					</LangGap>
				</Text>
			</NavContainer>
		</NavWrapper>
	)
}

export default NavigationBar
