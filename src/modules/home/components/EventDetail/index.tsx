import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Flex from 'common/components/Flex'
import { TitleText } from 'common/components/Text'

import {
	EVENT_DETAIL_TITLE,
	EVENT_DETAIL,
	PARTICIPANT_TITLE,
	PARTICIPANTS_DETAIL,
	REASONS_TO_COME_TITLE,
	REASONS_TO_COME_DETAIL,
} from './locales'

const EventDetail = () => {
	const I18n = useI18n()
	return (
		<Container style={{height:"auto"}}>
			<Flex alignItems="flex-start" justifyContent="flex-start" direction="column">
				<TitleText>{I18n.t(EVENT_DETAIL_TITLE)}</TitleText>
				{I18n.t(EVENT_DETAIL)}
				<TitleText> {I18n.t(PARTICIPANT_TITLE)} </TitleText>
				{I18n.t(PARTICIPANTS_DETAIL)}
				<TitleText>{I18n.t(REASONS_TO_COME_TITLE)}</TitleText>
				{I18n.t(REASONS_TO_COME_DETAIL)}
			</Flex>
		</Container>
	)
}

export default EventDetail
