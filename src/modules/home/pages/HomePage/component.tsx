import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { blue, black } from 'common/styles/colors'

import EventDetail from 'modules/home/components/EventDetail'
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
		</Gap>
	</ContentContainer>
)

export default HomePage
