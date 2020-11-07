/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import slugify from 'slugify'

import { Checkbox, CheckboxLabel, Checkmark } from 'common/components/Checkbox'
import Col from 'common/components/Col'
import ErrorMessage from 'common/components/ErrorMessage'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import Row from 'common/components/Row'
import Text from 'common/components/Text'

import { topics } from './topics'

const EventInfo = ({ formProps: { register, watch }, data }) => {
	const eventInfoData = data

	return (
		<div>
			<Text as="h3">Interests Topic</Text>
			<Text as="p">
				BarCamp Bangkhen intends to be the area of everyone, regardless of their personal interests.
				We would like to know your personal interests in order to predict the trend of our event.
			</Text>
			<Row>
				<Col>
					<FormControl>
						{topics.map((topic: string) => {
							const topicName = slugify(topic, { remove: /[()./]/g, lower: true })
							return (
								<CheckboxLabel key={topic}>
									{topic}
									<Checkbox
										name={topicName}
										ref={register}
										defaultChecked={eventInfoData[topicName]}
									/>
									<Checkmark />
								</CheckboxLabel>
							)
						})}
					</FormControl>
					<Row>
						<Col>
							<FormField>
								<FormControl>
									<label>Do you want shirt?</label>
									<RadioGroup>
										<Radio
											name="shirt"
											value="yes"
											ref={register}
											defaultChecked={!eventInfoData.shirt ? true : eventInfoData.shirt === 'yes'}
										/>
										<label>Yes</label>
									</RadioGroup>
									<RadioGroup>
										<Radio
											name="shirt"
											value="no"
											ref={register}
											defaultChecked={eventInfoData.shirt === 'no'}
										/>
										<label>No</label>
									</RadioGroup>
								</FormControl>
							</FormField>
						</Col>
						{watch('shirt') === 'yes' && (
							<Col>
								<FormField>
									<FormControl>
										<label>Size</label>
										<select name="shirtSize" ref={register} defaultValue={eventInfoData.shirtSize}>
											<option>-</option>
											<option>S</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
											<option>XXL</option>
										</select>
									</FormControl>
								</FormField>
							</Col>
						)}
					</Row>
				</Col>
			</Row>
		</div>
	)
}

export default EventInfo
