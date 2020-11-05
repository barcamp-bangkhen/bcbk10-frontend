import React from 'react'

import Contact from 'common/components/Contact'
import ContactInsta from 'common/components/Contact'
import ContentContainer from 'common/components/ContentContainer'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text from 'common/components/Text'
import { blue } from 'common/styles/colors'

import EventDetail from 'modules/home/components/EventDetail'
import RegisterSection from 'modules/home/components/RegisterSection'
import TimeTable from 'modules/home/components/TimeTable'

import createMeta from './createMeta'

const HomePage = () => (
	<ContentContainer>
		{createMeta()}
		<Gap size="32px" type="vertical">
			<Flex alignItems="center" justifyContent="center" direction="column">
				<Text color={blue}>
					<RegisterSection />
					<EventDetail />
					<TimeTable />
				</Text>
			</Flex>
		</Gap>
		<Contact background-color="blue" />
		<ContactInsta />
	</ContentContainer>
)

export default HomePage
