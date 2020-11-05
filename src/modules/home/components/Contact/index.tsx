import React from 'react'

import Link from 'next/link'

import useI18n from 'core/i18n/hooks/useI18n'

import Gap from 'common/components/Gap'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import InstagramIcon from 'common/components/icons/InstragramIcon'
import TwitterIcon from 'common/components/icons/TwitterIcon'

import { FACEBOOK_URL, IG_URL, TWITTER_URL } from 'modules/home/constants'

import { CONTACT_TITLE } from './locales'

const ICON_SIZE = 56

const Contact = () => {
	const I18n = useI18n()

	return (
		<Gap size="16px" type="vertical">
			<div>{I18n.t(CONTACT_TITLE)}</div>
			<Gap size="12px" justifyCenter>
				<Link href={FACEBOOK_URL} passHref={true}>
					<FacebookIcon size={ICON_SIZE} cursor="pointer" />
				</Link>
				<Link href={IG_URL} passHref={true}>
					<InstagramIcon size={ICON_SIZE} cursor="pointer" />
				</Link>
				<Link href={TWITTER_URL} passHref={true}>
					<TwitterIcon size={ICON_SIZE} cursor="pointer" />
				</Link>
			</Gap>
		</Gap>
	)
}

export default Contact
