/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import Col from 'common/components/Col'
import FormControl from 'common/components/FormControl'
import Radio from 'common/components/Radio'
import RadioGroup from 'common/components/RadioGroup'
import Row from 'common/components/Row'

const Covid19 = ({ formProps: { register }, data }) => {
	const { covidQ1, covidQ2, covidQ3, covidQ4, covidQ5, covidQ6, covidQ7, covidQ8 } = data

	return (
		<Row>
			<Col>
				<FormControl>
					<label>1. Temperature greater or equal than 37.5 degrees or had a fever before.</label>
					<RadioGroup>
						<Radio
							name="covidQ1"
							ref={register}
							value="lower"
							defaultChecked={covidQ1 === 'lower'}
						/>
						<label>Lower than 37.5 C</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ1" ref={register} value="over" defaultChecked={covidQ1 === 'over'} />
						<label>Over or same as 37.5 C or feeling feverish</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>
						2. Either illness with respiratory symptoms or following ”cough, sore throat, shortness
						on breathing or a difficulty on breathing”
					</label>
					<RadioGroup>
						<Radio name="covidQ2" ref={register} value="none" defaultChecked={covidQ2 === 'none'} />
						<label>None</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ2" ref={register} value="yes" defaultChecked={covidQ2 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>
						3. Travelled to / from or living in the COVID-19 risky area during 14 days before
						started illness.
					</label>
					<RadioGroup>
						<Radio name="covidQ3" ref={register} value="none" defaultChecked={covidQ3 === 'none'} />
						<label>None</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ3" ref={register} value="yes" defaultChecked={covidQ3 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>
						4. Contacted / Stay closed to COVID-19 patient (keep distance less than 1 meter fo 5
						minutes) within 14 days.
					</label>
					<RadioGroup>
						<Radio name="covidQ4" ref={register} value="none" defaultChecked={covidQ4 === 'none'} />
						<label>None</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ4" ref={register} value="yes" defaultChecked={covidQ4 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>
						5. Travelled to community area or crowded place such as local market, shopping mall,
						hospital or public transport.
					</label>
					<RadioGroup>
						<Radio name="covidQ5" ref={register} value="none" defaultChecked={covidQ5 === 'none'} />
						<label>None</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ5" ref={register} value="yes" defaultChecked={covidQ5 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>6. Patient who contacted with foreigner, crowded place or community area.</label>
					<RadioGroup>
						<Radio name="covidQ6" ref={register} value="no" defaultChecked={covidQ6 === 'no'} />
						<label>No</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ6" ref={register} value="yes" defaultChecked={covidQ6 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>7. Are you a medical staff?</label>
					<RadioGroup>
						<Radio name="covidQ7" ref={register} value="no" defaultChecked={covidQ7 === 'no'} />
						<label>No</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ7" ref={register} value="yes" defaultChecked={covidQ7 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
				<FormControl>
					<label>
						8. Been in close contact with 5 or more people who have had flu at the same time in the
						last 14 days
					</label>
					<RadioGroup>
						<Radio name="covidQ8" ref={register} value="no" defaultChecked={covidQ8 === 'no'} />
						<label>No</label>
					</RadioGroup>
					<RadioGroup>
						<Radio name="covidQ8" ref={register} value="yes" defaultChecked={covidQ8 === 'yes'} />
						<label>Yes</label>
					</RadioGroup>
				</FormControl>
			</Col>
		</Row>
	)
}

export default Covid19
