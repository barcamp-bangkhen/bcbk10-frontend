import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL, PARTICIPANT_TITLE, PARTICIPANTS_DETAIL, REASONS_TO_COME_TITLE, REASONS_TO_COME_DETAIL } from './locales'
// import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import {TextFlex} from './style';

const EventDetail = () => {
	const I18n = useI18n()

	return (
		// <div style={{border:"1px solid black"}}>
		<Gap size ='10vh' type='vertical' justifyCenter responsive={true}>
			{/* <Flex alignItems="flex-start" justifyContent="center" direction="column">	 */}
			<TextFlex>
			{I18n.t(EVENT_DETAIL_TITLE)} <br/>
			{I18n.t(EVENT_DETAIL)}
			{/* </Flex> */}
			{/* <Flex alignItems="flex-start" justifyContent="center" direction="column">	 */}
			{I18n.t(PARTICIPANT_TITLE)}  <br/>
			{I18n.t(PARTICIPANTS_DETAIL)}
			{/* </Flex>
			<Flex alignItems="flex-start" justifyContent="center" direction="column">	 */}
			{I18n.t(REASONS_TO_COME_TITLE)} <br/>
			{I18n.t(REASONS_TO_COME_DETAIL)}
			{/* </Flex> */}
			</TextFlex>
		</Gap>

	// </div>
	)
}

export default EventDetail
