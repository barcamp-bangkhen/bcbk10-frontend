import React from 'react'

import Flex from 'common/components/Flex'
import Text from 'common/components/Text'

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
	const { interestedTopic, shirt, shirtSize } = data.eventInfo[0]

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
					<Text>Interested Topic: {interestedTopic}</Text>
					{shirt === 'yes' && <Text>Shirt size: {shirtSize}</Text>}
					{shirt === 'no' && <Text>No shirt</Text>}
				</Flex>
			</Flex>
		</div>
	)
}

export default Confirmation
