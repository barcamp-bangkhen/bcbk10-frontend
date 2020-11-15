import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'

// import Container from 'common/components/Container'
import EventDetail from 'modules/home/components/EventDetail'
import Map from 'modules/home/components/Location'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'

import createMeta from './createMeta'

const HomePage = () => (
	<ContentContainer>
		{createMeta()}
		<Gap size="30vh" type="vertical">
				<RegisterSection />
				<EventDetail />
				<Map />
				<Sponsor />
		</Gap>
	</ContentContainer>
)

export default HomePage
