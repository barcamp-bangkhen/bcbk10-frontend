/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import Col from 'common/components/Col'
import FormControl from 'common/components/FormControl'
import { Radio, RadioLabel, Circle } from 'common/components/Radio'
import Row from 'common/components/Row'
import Text from 'common/components/Text'

const Covid19 = ({ formProps: { register, errors }, data }) => {
	const { covidQ1, covidQ2, covidQ3, covidQ4, covidQ5, covidQ6, covidQ7, covidQ8 } = data

	return (
		<Row>
			<Col>
				<FormControl>
					<Text as="p">
						1. Temperature greater or equal than 37.5 degrees or had a fever before.
					</Text>
					<RadioLabel>
						Lower than 37.5 C
						<Radio
							name="covidQ1"
							ref={register}
							value="lower"
							defaultChecked={covidQ1 === 'lower'}
						/>
						<Circle error={errors.covidQ1} />
					</RadioLabel>
					<RadioLabel>
						Over or same as 37.5 C or feeling feverish
						<Radio name="covidQ1" ref={register} value="over" defaultChecked={covidQ1 === 'over'} />
						<Circle error={errors.covidQ1} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						2. Either illness with respiratory symptoms or following ”cough, sore throat, shortness
						on breathing or a difficulty on breathing”
					</Text>
					<RadioLabel>
						None
						<Radio name="covidQ2" ref={register} value="none" defaultChecked={covidQ2 === 'none'} />
						<Circle error={errors.covidQ2} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ2" ref={register} value="yes" defaultChecked={covidQ2 === 'yes'} />
						<Circle error={errors.covidQ2} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						3. Travelled to / from or living in the COVID-19 risky area during 14 days before
						started illness.
					</Text>
					<RadioLabel>
						None
						<Radio name="covidQ3" ref={register} value="none" defaultChecked={covidQ3 === 'none'} />
						<Circle error={errors.covidQ3} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ3" ref={register} value="yes" defaultChecked={covidQ3 === 'yes'} />
						<Circle error={errors.covidQ3} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						4. Contacted / Stay closed to COVID-19 patient (keep distance less than 1 meter fo 5
						minutes) within 14 days.
					</Text>
					<RadioLabel>
						None
						<Radio name="covidQ4" ref={register} value="none" defaultChecked={covidQ4 === 'none'} />
						<Circle error={errors.covidQ4} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ4" ref={register} value="yes" defaultChecked={covidQ4 === 'yes'} />
						<Circle error={errors.covidQ4} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						5. Travelled to community area or crowded place such as local market, shopping mall,
						hospital or public transport.
					</Text>
					<RadioLabel>
						None
						<Radio name="covidQ5" ref={register} value="none" defaultChecked={covidQ5 === 'none'} />
						<Circle error={errors.covidQ5} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ5" ref={register} value="yes" defaultChecked={covidQ5 === 'yes'} />
						<Circle error={errors.covidQ5} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						6. Patient who contacted with foreigner, crowded place or community area.
					</Text>
					<RadioLabel>
						No
						<Radio name="covidQ6" ref={register} value="no" defaultChecked={covidQ6 === 'no'} />
						<Circle error={errors.covidQ6} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ6" ref={register} value="yes" defaultChecked={covidQ6 === 'yes'} />
						<Circle error={errors.covidQ6} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">7. Are you a medical staff?</Text>
					<RadioLabel>
						No
						<Radio name="covidQ7" ref={register} value="no" defaultChecked={covidQ7 === 'no'} />
						<Circle error={errors.covidQ7} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ7" ref={register} value="yes" defaultChecked={covidQ7 === 'yes'} />
						<Circle error={errors.covidQ7} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">
						8. Been in close contact with 5 or more people who have had flu at the same time in the
						last 14 days
					</Text>
					<RadioLabel>
						No
						<Radio name="covidQ8" ref={register} value="no" defaultChecked={covidQ8 === 'no'} />
						<Circle error={errors.covidQ8} />
					</RadioLabel>
					<RadioLabel>
						Yes
						<Radio name="covidQ8" ref={register} value="yes" defaultChecked={covidQ8 === 'yes'} />
						<Circle error={errors.covidQ8} />
					</RadioLabel>
				</FormControl>
			</Col>
		</Row>
	)
}

export default Covid19
