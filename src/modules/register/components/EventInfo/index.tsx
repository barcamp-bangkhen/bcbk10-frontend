/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import slugify from 'slugify'

import { Checkbox, CheckboxLabel, Checkmark } from 'common/components/Checkbox'
import Col from 'common/components/Col'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import { Radio, RadioLabel, Circle } from 'common/components/Radio'
import Row from 'common/components/Row'
import Text from 'common/components/Text'

import { topics } from './topics'

const EventInfo = ({ formProps: { register, watch, errors }, data }) => {
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
									<Text as="p">Do you want shirt?</Text>
									<RadioLabel>
										Yes
										<Radio
											name="shirt"
											value="yes"
											ref={register}
											defaultChecked={!!eventInfoData.shirt}
										/>
										<Circle error={errors.shirt} />
									</RadioLabel>
									<RadioLabel>
										No
										<Radio
											name="shirt"
											value="no"
											ref={register}
											defaultChecked={eventInfoData.shirt === 'no'}
										/>
										<Circle error={errors.shirt} />
									</RadioLabel>
								</FormControl>
							</FormField>
						</Col>
						{watch('shirt') === 'yes' && (
							<Col>
								<FormField>
									<FormControl>
										<Text as="p">Size</Text>
										<RadioLabel>
											S
											<Radio
												name="shirtSize"
												value="S"
												ref={register}
												defaultChecked={eventInfoData.shirtSize === 'S'}
											/>
											<Circle />
										</RadioLabel>
										<RadioLabel>
											M
											<Radio
												name="shirtSize"
												value="M"
												ref={register}
												defaultChecked={eventInfoData.shirtSize === 'M'}
											/>
											<Circle />
										</RadioLabel>
										<RadioLabel>
											L
											<Radio
												name="shirtSize"
												value="L"
												ref={register}
												defaultChecked={eventInfoData.shirtSize === 'L'}
											/>
											<Circle />
										</RadioLabel>
										<RadioLabel>
											XL
											<Radio
												name="shirtSize"
												value="XL"
												ref={register}
												defaultChecked={eventInfoData.shirtSize === 'XL'}
											/>
											<Circle />
										</RadioLabel>
										<RadioLabel>
											XXL
											<Radio
												name="shirtSize"
												value="XXL"
												ref={register}
												defaultChecked={eventInfoData.shirtSize === 'XXL'}
											/>
											<Circle />
										</RadioLabel>
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
