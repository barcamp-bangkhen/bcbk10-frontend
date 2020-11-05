import React from 'react'

import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'
import useI18n from 'core/i18n/hooks/useI18n'

import { EVENT_DETAIL_TITLE, EVENT_DETAIL } from './locales'

export const Container = styled.div`
	// height: calc(100vh - ${NAV_BAR_HEIGHT}); optional
	height: 400px;
`

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
