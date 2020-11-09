/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Col from 'common/components/Col'
import FormControl from 'common/components/FormControl'
import { Radio, RadioLabel, Circle } from 'common/components/Radio'
import Row from 'common/components/Row'
import Text from 'common/components/Text'

import { Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, LOWER, OVER, NONE, YES1, NO, YES2 } from './locales'

const Covid19 = ({ formProps: { register, errors }, data }) => {
	const { covidQ1, covidQ2, covidQ3, covidQ4, covidQ5, covidQ6, covidQ7, covidQ8 } = data

	const I18n = useI18n()

	return (
		<Row>
			<Col>
				<FormControl>
					<Text as="p">{I18n.t(Q1)}</Text>
					<RadioLabel>
						{I18n.t(LOWER)}
						<Radio
							name="covidQ1"
							ref={register}
							value="lower"
							defaultChecked={covidQ1 === 'lower'}
						/>
						<Circle error={errors.covidQ1} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(OVER)}
						<Radio name="covidQ1" ref={register} value="over" defaultChecked={covidQ1 === 'over'} />
						<Circle error={errors.covidQ1} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q2)}</Text>
					<RadioLabel>
						{I18n.t(NONE)}
						<Radio name="covidQ2" ref={register} value="none" defaultChecked={covidQ2 === 'none'} />
						<Circle error={errors.covidQ2} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES1)}
						<Radio name="covidQ2" ref={register} value="yes" defaultChecked={covidQ2 === 'yes'} />
						<Circle error={errors.covidQ2} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q3)}</Text>
					<RadioLabel>
						{I18n.t(NONE)}
						<Radio name="covidQ3" ref={register} value="none" defaultChecked={covidQ3 === 'none'} />
						<Circle error={errors.covidQ3} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES1)}
						<Radio name="covidQ3" ref={register} value="yes" defaultChecked={covidQ3 === 'yes'} />
						<Circle error={errors.covidQ3} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q4)}</Text>
					<RadioLabel>
						{I18n.t(NONE)}
						<Radio name="covidQ4" ref={register} value="none" defaultChecked={covidQ4 === 'none'} />
						<Circle error={errors.covidQ4} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES1)}
						<Radio name="covidQ4" ref={register} value="yes" defaultChecked={covidQ4 === 'yes'} />
						<Circle error={errors.covidQ4} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q5)}</Text>
					<RadioLabel>
						{I18n.t(NONE)}
						<Radio name="covidQ5" ref={register} value="none" defaultChecked={covidQ5 === 'none'} />
						<Circle error={errors.covidQ5} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES1)}
						<Radio name="covidQ5" ref={register} value="yes" defaultChecked={covidQ5 === 'yes'} />
						<Circle error={errors.covidQ5} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q6)}</Text>
					<RadioLabel>
						{I18n.t(NO)}
						<Radio name="covidQ6" ref={register} value="no" defaultChecked={covidQ6 === 'no'} />
						<Circle error={errors.covidQ6} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES2)}
						<Radio name="covidQ6" ref={register} value="yes" defaultChecked={covidQ6 === 'yes'} />
						<Circle error={errors.covidQ6} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q7)}</Text>
					<RadioLabel>
						{I18n.t(NO)}
						<Radio name="covidQ7" ref={register} value="no" defaultChecked={covidQ7 === 'no'} />
						<Circle error={errors.covidQ7} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES2)}
						<Radio name="covidQ7" ref={register} value="yes" defaultChecked={covidQ7 === 'yes'} />
						<Circle error={errors.covidQ7} />
					</RadioLabel>
				</FormControl>
				<FormControl>
					<Text as="p">{I18n.t(Q8)}</Text>
					<RadioLabel>
						{I18n.t(NO)}
						<Radio name="covidQ8" ref={register} value="no" defaultChecked={covidQ8 === 'no'} />
						<Circle error={errors.covidQ8} />
					</RadioLabel>
					<RadioLabel>
						{I18n.t(YES2)}
						<Radio name="covidQ8" ref={register} value="yes" defaultChecked={covidQ8 === 'yes'} />
						<Circle error={errors.covidQ8} />
					</RadioLabel>
				</FormControl>
			</Col>
		</Row>
	)
}

export default Covid19
