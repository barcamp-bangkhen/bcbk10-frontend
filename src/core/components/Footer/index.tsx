import React from 'react'

import Contact from 'common/components/Contact'
import FireIcon, {topFunction} from 'common/components/icons/FireIcon'

import { FooterContain, LicenseContainer } from './styled'

const Footer = () => {
	return (
		<FooterContain alignItems="center" justifyContent="space-between" direction="row">
			<Contact />
			<FireIcon onClick={topFunction} />
			<LicenseContainer>@barcamp2020</LicenseContainer>
		</FooterContain>
	)
}

export default Footer
