import React, { useCallback } from 'react'

import Link from 'next/link'

import useSetLocale from 'core/i18n/hooks/useSetLocale'
import { Locale } from 'core/i18n/types'

import Text from 'common/components/Text'
import { gray } from 'common/styles/colors'

import { Bars, NavContainer, NavLink, NavWrapper, NavLogo, Gaps } from './styled'

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
				<NavLogo />
				<Bars onClick={toggle.toggle} />
				<Gaps size="4rem" alignCenter>
					<Link href="/" passHref>
						<NavLink>Timetable</NavLink>
					</Link>
					<Link href="/" passHref>
						<NavLink>Sponsors</NavLink>
					</Link>
					<Link href="/" passHref>
						<NavLink>FAQS</NavLink>
					</Link>
					<Link href="/register" passHref>
						<NavLink>Register</NavLink>
					</Link>
				</Gaps>

				<Text as="div" size="14px" color={gray[700]}>
					<Gaps size="4px" alignCenter>
						<Text onClick={setLocaleTH}>th</Text>
						<div>|</div>
						<Text onClick={setLocaleEN}>en</Text>
					</Gaps>
				</Text>
			</NavContainer>
		</NavWrapper>
	)
}

export default NavigationBar
