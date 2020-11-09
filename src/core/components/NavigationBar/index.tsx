import React, { useCallback } from 'react'

import Link from 'next/link'

import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import BarCampIcon from '../../../common/components/icons/BarCampIcon'

import { Bars, NavContainer, NavLink, NavWrapper, MenuGap, LangGap } from './styled'

const NavigationBar = ({ toggle }: { toggle: any }) => {
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
				<BarCampIcon />
				<Bars onClick={toggle.toggle} />
				<MenuGap size="6rem" alignCenter>
					<Link href="/" passHref>
						<NavLink>Timetable</NavLink>
					</Link>
					<Link href="/" passHref>
						<NavLink>FAQS</NavLink>
					</Link>
					<Link href="/" passHref>
						<NavLink>Session</NavLink>
					</Link>
					<Link href="/register" passHref>
						<NavLink>Register</NavLink>
					</Link>
				</MenuGap>

				<Text as="div" size="1.2vw" color={gray[700]} margin={'0px 20px 0px 0px'}>
					<LangGap size="4px">
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
