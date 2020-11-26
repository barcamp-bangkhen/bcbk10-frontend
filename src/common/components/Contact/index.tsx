import React from 'react'

import Link from 'next/link'

import Gap from 'common/components/Gap'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import InstagramIcon from 'common/components/icons/InstragramIcon'
import TwitterIcon from 'common/components/icons/TwitterIcon'

import { FACEBOOK_URL, IG_URL, TWITTER_URL } from './constants'

import Flex from 'common/components/Flex'

const ICON_SIZE = 50

const Contact = () => {
	return (
			<Flex alignItems='center' justifyContent="center" direction='row'>
				<Gap size="16px" type='horizontal'>
					<Gap size="16x" justifyCenter>
						<Link href={FACEBOOK_URL} passHref={true}>
							<FacebookIcon size ={ICON_SIZE} cursor="pointer"/>
						</Link>
						<Link href={IG_URL} passHref={true}>
							<InstagramIcon size={ICON_SIZE} cursor="pointer" />
						</Link>
						<Link href={TWITTER_URL} passHref={true}>
							<TwitterIcon size={ICON_SIZE} cursor="pointer" />
						</Link>
					</Gap>
				</Gap>
			</Flex>
	)
}

export default Contact
