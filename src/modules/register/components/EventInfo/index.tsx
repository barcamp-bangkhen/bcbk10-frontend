/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import Col from 'common/components/Col'
import ErrorMessage from 'common/components/ErrorMessage'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import Row from 'common/components/Row'

const EventInfo = ({ formProps: { register, errors, watch }, data }) => {
	const { interestedTopic, shirt, shirtSize } = data

	return (
		<Row>
			<Col>
				<FormControl>
					<label>Interested Topic</label>
					<select name="interestedTopic" ref={register} defaultValue={interestedTopic}>
						<option>Option 1</option>
						<option>Option 2</option>
						<option>Option 3</option>
						<option>Option 4</option>
					</select>
					{errors.interestedTopic && <ErrorMessage>{errors.interestedTopic?.message}</ErrorMessage>}
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
										defaultChecked={!shirt ? true : shirt === 'yes'}
									/>
									<label>Yes</label>
								</RadioGroup>
								<RadioGroup>
									<Radio name="shirt" value="no" ref={register} defaultChecked={shirt === 'no'} />
									<label>No</label>
								</RadioGroup>
							</FormControl>
							<ErrorMessage show={errors.shirt}>{errors.shirt?.message}</ErrorMessage>
						</FormField>
					</Col>
					{watch('shirt') === 'yes' && (
						<Col>
							<FormField>
								<FormControl>
									<label>Size</label>
									<select name="shirtSize" ref={register} defaultValue={shirtSize}>
										<option>-</option>
										<option>S</option>
										<option>M</option>
										<option>L</option>
										<option>XL</option>
										<option>XXL</option>
									</select>
								</FormControl>
								<ErrorMessage show={errors.shirtSize}>{errors.shirtSize?.message}</ErrorMessage>
							</FormField>
						</Col>
					)}
				</Row>
			</Col>
		</Row>
	)
}

export default EventInfo
