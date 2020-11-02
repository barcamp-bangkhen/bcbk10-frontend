import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL } from './locales'

const EventDetail = () => {
	const I18n = useI18n()

	return (
		<div>
			{I18n.t(EVENT_DETAIL_TITLE)} <br />
			{I18n.t(EVENT_DETAIL)}
		</div>
	)
}

export default EventDetail
