import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Col from 'common/components/Col'
import ErrorMessage from 'common/components/ErrorMessage'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import Label from 'common/components/Label'
import Row from 'common/components/Row'
import Span from 'common/components/Span'
import TextInput from 'common/components/TextInput'

import {
	FIRST_NAME,
	LAST_NAME,
	NICKNAME,
	EMAIL,
	PHONE_NUMBER,
	CONGENITAL_DISEASE,
	ALLERGIC_FOOD,
} from './locales'

const UserInfo = ({ formProps: { register, errors }, data }) => {
	const { firstName, lastName, nickname, email, phoneNumber, conDisease, allergicFood } = data

	const I18n = useI18n()

	return (
		<Row>
			<Col>
				<FormField>
					<FormControl>
						<TextInput name="firstName" ref={register} placeholder=" " defaultValue={firstName} />
						<Label>
							<Span>{I18n.t(FIRST_NAME)}</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.firstName}>{errors.firstName?.message}</ErrorMessage>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput
							name="lastName"
							ref={register}
							placeholder=" "
							error={errors.lastName}
							defaultValue={lastName}
						/>
						<Label>
							<Span>{I18n.t(LAST_NAME)}</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.lastName}>{errors.lastName?.message}</ErrorMessage>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput
							name="nickname"
							ref={register}
							placeholder=" "
							error={errors.nickname}
							defaultValue={nickname}
						/>
						<Label>
							<Span>{I18n.t(NICKNAME)}</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.nickname}>{errors.nickname?.message}</ErrorMessage>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput
							name="email"
							ref={register}
							placeholder=" "
							error={errors.email}
							defaultValue={email}
						/>
						<Label>
							<Span>{I18n.t(EMAIL)}</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.email}>{errors.email?.message}</ErrorMessage>
				</FormField>
			</Col>
			<Col>
				<FormField>
					<FormControl>
						<TextInput
							name="phoneNumber"
							ref={register}
							placeholder=" "
							error={errors.phoneNumber}
							defaultValue={phoneNumber}
						/>
						<Label>
							<Span>{I18n.t(PHONE_NUMBER)}</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.phoneNumber}>{errors.phoneNumber?.message}</ErrorMessage>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput name="conDisease" ref={register} placeholder=" " defaultValue={conDisease} />
						<Label>
							<Span>{I18n.t(CONGENITAL_DISEASE)}</Span>
						</Label>
					</FormControl>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput
							name="allergicFood"
							ref={register}
							placeholder=" "
							defaultValue={allergicFood}
						/>
						<Label>
							<Span>{I18n.t(ALLERGIC_FOOD)}</Span>
						</Label>
					</FormControl>
				</FormField>
			</Col>
		</Row>
	)
}

export default UserInfo
