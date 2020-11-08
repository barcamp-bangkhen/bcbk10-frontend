import React from 'react'

import slugify from 'slugify'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'

import { topics } from '../EventInfo/topics'

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

	return (
		<div>
			<Text as="h1" textAlign="center">
				User Info
			</Text>
			<Flex justifyContent="space-around">
				<Flex direction="column">
					<Text>First name: {firstName}</Text>
					<Text>Last name: {lastName}</Text>
					<Text>Nickname: {nickname}</Text>
					<Text>Email: {email}</Text>
				</Flex>
				<Flex direction="column">
					<Text>Phone number: {phoneNumber}</Text>
					<Text>Congenital disease: {!conDisease ? '-' : conDisease}</Text>
					<Text>Allergic food: {!allergicFood ? '-' : allergicFood}</Text>
				</Flex>
			</Flex>
			<Text as="h1" textAlign="center">
				Event Info
			</Text>
			<Flex justifyContent="space-around">
				<Flex direction="column">
					{eventInfoData.shirt === 'yes' && <Text>Shirt size: {eventInfoData.shirtSize}</Text>}
					{eventInfoData.shirt === 'no' && <Text>No shirt</Text>}
					<Text>Interests Topic: {!interests.length ? '-' : interests.join(', ')}</Text>
				</Flex>
			</Flex>
		</div>
	)
}

export default Confirmation
