import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL, PARTICIPANT_TITLE, PARTICIPANTS_DETAIL, REASONS_TO_COME_TITLE, REASONS_TO_COME_DETAIL } from './locales'
// import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Flex from 'common/components/Flex'
import Text from 'common/components/Text'
import {DetailTitle, Detail} from './style';
import {red, blue} from 'common/styles/colors'
const EventDetail = () => {
	const I18n = useI18n()

	return (
		<div style={{border: "1px solid black;"}}>
			<Flex alignItems='center' justifyContent='center' direction='column'>
				<Gap size ='32px' type='vertical' justifyCenter > 
					<Detail>
					<Text size='36px;' color={red} padding="0 20px 20px 20px;">
						{I18n.t(EVENT_DETAIL_TITLE)}
					</Text>
						<br/>
						{I18n.t(EVENT_DETAIL)}
					</Detail>
					<Detail>
					<Text size='36px;' color={red} padding="0 20px 20px 20px;">
						{I18n.t(PARTICIPANT_TITLE)} 
					</Text> <br/>
						{I18n.t(PARTICIPANTS_DETAIL)}
					</Detail>
					<Detail>
					<Text size='36px;' color={red} padding="0 20px 20px 20px;">
						{I18n.t(REASONS_TO_COME_TITLE)}
					</Text> <br/>
						{I18n.t(REASONS_TO_COME_DETAIL)}
					</Detail>
				</Gap>
			</Flex>
		</div>
	)
}

export default EventDetail
