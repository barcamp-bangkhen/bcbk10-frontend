import React from 'react'

import styled from 'styled-components'

import { NAV_BAR_HEIGHT } from 'core/components/NavigationBar/styled'
import useI18n from 'core/i18n/hooks/useI18n'

import Flex from 'common/components/Flex'

import { TIME_TABLE_TITLE, ACTIVITIES, timeDuration, tableHeader } from './locales'

export const Container = styled.div`
	// height: calc(100vh - ${NAV_BAR_HEIGHT}); optional
	height: 400px;
`

const TimeTable = () => {
	const I18n = useI18n()

	return (
		<Container>
			<Flex alignItems="center" justifyContent="center" direction="column">
				{I18n.t(TIME_TABLE_TITLE)} <br />
				<table>
					<tr>
						<td>{I18n.t(tableHeader[0])}</td>
						<td>{I18n.t(tableHeader[1])}</td>
					</tr>
					{ACTIVITIES.map(function (activity, index) {
						return (
							<tr key={index}>
								<td>{timeDuration[index]}</td>
								<td>{I18n.t(activity)}</td>
							</tr>
						)
					})}
				</table>
			</Flex>
		</Container>
	)
}

export default TimeTable
