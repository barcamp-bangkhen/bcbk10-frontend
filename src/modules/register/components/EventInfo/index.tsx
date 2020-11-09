/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import slugify from 'slugify'

import useI18n from 'core/i18n/hooks/useI18n'

import { Checkbox, CheckboxLabel, Checkmark } from 'common/components/Checkbox'
import Col from 'common/components/Col'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import { Radio, RadioLabel, Circle } from 'common/components/Radio'
import Row from 'common/components/Row'
import Text from 'common/components/Text'

import { INTEREST, DETAIL, SHIRT, SIZE, YES, NO } from './locales'
import { topics } from './topics'

const EventInfo = ({ formProps: { register, watch, errors }, data }) => {
	const eventInfoData = data

	const I18n = useI18n()
	return (
		<div>
			<Text as="h3">{I18n.t(INTEREST)}</Text>
			<Text as="p">{I18n.t(DETAIL)}</Text>
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
									<Text as="p">{I18n.t(SHIRT)}</Text>
									<RadioLabel>
										{I18n.t(YES)}
										<Radio
											name="shirt"
											value="yes"
											ref={register}
											defaultChecked={!!eventInfoData.shirt}
										/>
										<Circle error={errors.shirt} />
									</RadioLabel>
									<RadioLabel>
										{I18n.t(NO)}
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
										<Text as="p">{I18n.t(SIZE)}</Text>
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
