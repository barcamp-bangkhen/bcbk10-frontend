import React from 'react'

import ContentContainer from 'common/components/ContentContainer'
import Gap from 'common/components/Gap'
import {orange} from 'common/styles/colors'
// import Container from 'common/components/Container'
import EventDetail from 'modules/home/components/EventDetail'
import Map from 'modules/home/components/Location'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'

import Footer from 'core/components/Footer'

import createMeta from './createMeta'

const HomePage = () => (
	<div>
		{createMeta()}
		{/* <Gap size="60px" type="vertical"> */}
				<RegisterSection />
				<EventDetail />
				<Map />
				<div style={{backgroundColor:orange}}>
				<Sponsor />
				<Footer/>
				</div>
		{/* </Gap> */}
	</div>
)

export default HomePage
