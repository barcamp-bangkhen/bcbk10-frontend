import React from 'react'

import Link from 'next/link'

import Gap from 'common/components/Gap'
import FacebookIcon from 'common/components/icons/FacebookIcon'
import InstagramIcon from 'common/components/icons/InstragramIcon'
import TwitterIcon from 'common/components/icons/TwitterIcon'

import { FACEBOOK_URL, IG_URL, TWITTER_URL } from './constants'

import Flex from 'common/components/Flex'
import { media } from 'common/styles/utils/viewport'
import MediaQuery, { useMediaQuery } from 'react-responsive'


const ICON_SIZE = 50
const MOBILE_ICON_SIZE = 20

const Contact = () => {

	const isDesktopOrMobile = useMediaQuery(
		{ maxWidth: 768 },
	 )

	return (
			<Flex alignItems='flex-start' justifyContent="center" direction='row'>
						{/* <div style={{border:"1px solid black"}}>  */}
				<Gap size="16px" type='horizontal'>
					<Gap size="12px" justifyCenter>
							<Link href={FACEBOOK_URL} passHref={true}>
							{isDesktopOrMobile
								?<FacebookIcon size={MOBILE_ICON_SIZE} cursor="pointer" />
								: <FacebookIcon size ={ICON_SIZE} cursor="pointer"/>
								}
							</Link>
							<Link href={IG_URL} passHref={true}>
								{isDesktopOrMobile
									?<InstagramIcon size={MOBILE_ICON_SIZE} cursor="pointer" />
									:<InstagramIcon size={ICON_SIZE} cursor="pointer" />
								}
							</Link>
							<Link href={TWITTER_URL} passHref={true}>
								{isDesktopOrMobile
									?<TwitterIcon size={MOBILE_ICON_SIZE} cursor="pointer" />
									:<TwitterIcon size={ICON_SIZE} cursor="pointer" />
								}
							</Link>
					</Gap>
				</Gap>
				{/* </div> */}
			</Flex>
	)
}

export default Contact
