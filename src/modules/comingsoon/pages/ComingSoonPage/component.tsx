import React from 'react'

import ComingSoonDetail from 'modules/comingsoon/components/ComingSoon'

import Flex from '../../../../common/components/Flex'
import HomeIcon from '../../../../common/components/icons/HomeIcon'
import { Container } from '../../../home/components/RegisterSection/styled'

import createMeta from './createMeta'

const ComingSoonPage = () => (
	<Container>
		<Flex alignItems="center" justifyContent="center" direction="column">
			{createMeta()}
			<HomeIcon />
			<ComingSoonDetail />
		</Flex>
	</Container>
)

export default ComingSoonPage
