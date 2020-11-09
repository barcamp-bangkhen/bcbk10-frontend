import React from 'react'

import Col from 'common/components/Col'
import ErrorMessage from 'common/components/ErrorMessage'
import FormControl from 'common/components/FormControl'
import FormField from 'common/components/FormField'
import Label from 'common/components/Label'
import Row from 'common/components/Row'
import Span from 'common/components/Span'
import TextInput from 'common/components/TextInput'

const UserInfo = ({ formProps: { register, errors }, data }) => {
	const { firstName, lastName, nickname, email, phoneNumber, conDisease, allergicFood } = data

	return (
		<Row>
			<Col>
				<FormField>
					<FormControl>
						<TextInput name="firstName" ref={register} placeholder=" " defaultValue={firstName} />
						<Label>
							<Span>First name</Span>
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
							<Span>Last name</Span>
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
							<Span>Nickname</Span>
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
							<Span>Email</Span>
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
							<Span>Phone number</Span>
						</Label>
					</FormControl>
					<ErrorMessage show={errors.phoneNumber}>{errors.phoneNumber?.message}</ErrorMessage>
				</FormField>
				<FormField>
					<FormControl>
						<TextInput name="conDisease" ref={register} placeholder=" " defaultValue={conDisease} />
						<Label>
							<Span>Congenital disease</Span>
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
							<Span>Allergic food</Span>
						</Label>
					</FormControl>
				</FormField>
			</Col>
		</Row>
	)
}

export default UserInfo
