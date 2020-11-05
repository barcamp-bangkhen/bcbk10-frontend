import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { blue } from 'common/styles/colors'


import EventDetail from 'modules/home/components/EventDetail'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'
import Footer from 'modules/home/components/Footer'

import createMeta from './createMeta'

const HomePage = () => (
	<ContentContainer>
		{createMeta()}
		{/* <Gap size="32px" type="vertical"> */}
			<Flex alignItems="center" justifyContent="center" direction="column">
				<Text color={blue}>
					<RegisterSection />
					<EventDetail />
				</Text>
			</Flex>
			<Sponsor />
		{/* </Gap> */}

		<Footer />
	</ContentContainer>
)

export default HomePage
