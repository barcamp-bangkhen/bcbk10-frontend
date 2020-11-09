import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL, PARTICIPANT_TITLE, PARTICIPANTS_DETAIL, REASONS_TO_COME_TITLE, REASONS_TO_COME_DETAIL } from './locales'
// import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Flex from 'common/components/Flex'
import Text, {TitleText, ContentText} from 'common/components/Text'
import {Container} from 'common/components/Container'
import {DetailTitle, Detail} from './style';
import {red, blue} from 'common/styles/colors'
const EventDetail = () => {
	const I18n = useI18n()

	return (
		// <div style={{border: "1px solid black;"}}>
			<Container>
			<Flex alignItems='center' justifyContent='center' direction='column'>
				<Gap size =' 36px' type='vertical' justifyCenter > 
					<Gap size = '10px' type='vertical'>
						<TitleText>{I18n.t(EVENT_DETAIL_TITLE)}</TitleText>
						{I18n.t(EVENT_DETAIL)}
					</Gap>
					<Gap size = '10px' type='vertical'>
						<TitleText>	{I18n.t(PARTICIPANT_TITLE)} </TitleText>
						{I18n.t(PARTICIPANTS_DETAIL)}
					</Gap>
					<Gap size = '10px' type='vertical'>
						<TitleText>{I18n.t(REASONS_TO_COME_TITLE)}</TitleText>
						{I18n.t(REASONS_TO_COME_DETAIL)}
					</Gap>
				</Gap>
			</Flex>
			</Container>
		// </div>
	)
}

export default EventDetail
