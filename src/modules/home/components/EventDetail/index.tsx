import React from 'react'

import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'
import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL, PARTICIPANT_TITLE, PARTICIPANTS_DETAIL, REASONS_TO_COME_TITLE, REASONS_TO_COME_DETAIL } from './locales'
import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

const EventDetail = () => {
	const I18n = useI18n()

	return (
		<Gap size ='10ch' type='vertical'>

			<div>			
				{I18n.t(EVENT_DETAIL_TITLE)} <br />
				{I18n.t(EVENT_DETAIL)}
			</div>

			<div>
				{I18n.t(PARTICIPANT_TITLE)} <br/>
				{I18n.t(PARTICIPANTS_DETAIL)}
			</div>
			<div>
				{I18n.t(REASONS_TO_COME_TITLE)} <br/>
				{I18n.t(REASONS_TO_COME_DETAIL)}
			</div>
		</Gap>

	)
}

export default EventDetail
