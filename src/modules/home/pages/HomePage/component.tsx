import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import Background from 'common/components/Background'
import { blue, black } from 'common/styles/colors'

import EventDetail from 'modules/home/components/EventDetail'
import Footer from 'modules/home/components/Footer'
import Map from 'modules/home/components/Location'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'

import createMeta from './createMeta'

const HomePage = () => (
	<ContentContainer>
		{createMeta()}
		<Gap size="32px" type="vertical">
				<RegisterSection />
				<Text color={blue}>
					<EventDetail />
				</Text>
				<Map />
				<Sponsor />
			<Footer />
		</Gap>
	</ContentContainer>
)

export default HomePage
