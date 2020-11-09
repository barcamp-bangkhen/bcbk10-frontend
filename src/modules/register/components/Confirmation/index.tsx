import React from 'react'

import slugify from 'slugify'

import useI18n from 'core/i18n/hooks/useI18n'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'

import { SIZE, INTEREST, NO_SHIRT } from '../EventInfo/locales'
import { topics } from '../EventInfo/topics'
import { USER_INFO, EVENT_INFO } from '../RegisterForm/locales'
import {
	FIRST_NAME,
	LAST_NAME,
	NICKNAME,
	EMAIL,
	PHONE_NUMBER,
	CONGENITAL_DISEASE,
	ALLERGIC_FOOD,
} from '../UserInfo/locales'

const Confirmation = ({ data }) => {
	const {
		firstName,
		lastName,
		nickname,
		email,
		phoneNumber,
		conDisease,
		allergicFood,
	} = data.userInfo[0]
	const eventInfoData = data.eventInfo[0]

	const interests: string[] = []
	for (const data in eventInfoData) {
		if (eventInfoData[data] === true) {
			topics.forEach((topic: string) => {
				if (slugify(topic, { remove: /[()./]/g, lower: true }) === data) {
					interests.push(topic)
				}
			})
		}
	}

	const I18n = useI18n()

	return (
		<div>
			<Text as="h2" textAlign="center">
				{I18n.t(USER_INFO)}
			</Text>
			<Flex justifyContent="space-around">
				<Flex direction="column">
					<Text>
						{I18n.t(FIRST_NAME)}: {firstName}
					</Text>
					<Text>
						{I18n.t(LAST_NAME)}: {lastName}
					</Text>
					<Text>
						{I18n.t(NICKNAME)}: {nickname}
					</Text>
					<Text>
						{I18n.t(EMAIL)}: {email}
					</Text>
				</Flex>
				<Flex direction="column">
					<Text>
						{I18n.t(PHONE_NUMBER)}: {phoneNumber}
					</Text>
					<Text>
						{I18n.t(CONGENITAL_DISEASE)}: {!conDisease ? '-' : conDisease}
					</Text>
					<Text>
						{I18n.t(ALLERGIC_FOOD)}: {!allergicFood ? '-' : allergicFood}
					</Text>
				</Flex>
			</Flex>
			<Text as="h2" textAlign="center">
				{I18n.t(EVENT_INFO)}
			</Text>
			<Flex justifyContent="space-around">
				<Flex direction="column">
					{eventInfoData.shirt === 'yes' && (
						<Text>
							{I18n.t(SIZE)}: {eventInfoData.shirtSize}
						</Text>
					)}
					{eventInfoData.shirt === 'no' && <Text>{I18n.t(NO_SHIRT)}</Text>}
					<Text>
						{I18n.t(INTEREST)}: {!interests.length ? '-' : interests.join(', ')}
					</Text>
				</Flex>
			</Flex>
		</div>
	)
}

export default Confirmation
