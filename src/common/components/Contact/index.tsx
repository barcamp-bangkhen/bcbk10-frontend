import React from 'react'

import Link from 'next/link'

import Gap from 'common/components/Gap'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import InstagramIcon from 'common/components/icons/InstragramIcon'
import Text from 'common/components/Text'

import { FACEBOOK_URL, IG_URL} from './constants'

import {FOLLOW_US} from './locales'
import useI18n from 'core/i18n/hooks/useI18n'

import Flex from 'common/components/Flex'

const ICON_SIZE = 50

const Contact = () => {
	const I18n = useI18n()
	return (
			<Flex alignItems='center' justifyContent="center" direction='row'>
				<Flex alignItems='center' justifyContent="center" direction='column'>
					<Text>{I18n.t(FOLLOW_US)}</Text>
					<Gap size="16px" type='horizontal'>
						<Gap size="16px" justifyCenter>
							<Link href={FACEBOOK_URL} passHref={true}>
								<FacebookIcon size ={ICON_SIZE} cursor="pointer"/>
							</Link>
							<Link href={IG_URL} passHref={true}>
								<InstagramIcon size={ICON_SIZE} cursor="pointer" />
							</Link>
						</Gap>
					</Gap>
				</Flex>
			</Flex>
	)
}

export default Contact
