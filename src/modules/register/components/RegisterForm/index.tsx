import React, { useState, useContext } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import slugify from 'slugify'
import styled from 'styled-components'

import useI18n from 'core/i18n/hooks/useI18n'

import ContentContainer from 'common/components/ContentContainer'
import Form from 'common/components/Form'
import ProgressBar from 'common/components/ProgressBar'
import Step from 'common/components/Step'
import Stepper from 'common/components/Stepper'
import Text from 'common/components/Text'

import { StoreContext } from '../../context/store'
import Confirmation from '../Confirmation'
import Covid19 from '../Covid19'
import { Covid19Data } from '../Covid19/Covid19Data'
import covid19Schema from '../Covid19/covid19Schema'
import EventInfo from '../EventInfo'
import { EventInfoData } from '../EventInfo/EventInfoData'
import eventInfoSchema from '../EventInfo/eventInfoSchema'
import { topics } from '../EventInfo/topics'
import UserInfo from '../UserInfo'
import { UserInfoData } from '../UserInfo/UserInfoData'
import userInfoSchema from '../UserInfo/userInfoSchema'

import { FORM_TITLE } from './locales'

const Button = styled.button`
	font: inherit;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	width: 10rem;
	background: transparent;
	border: 1px solid coral;
	cursor: pointer;

	&:hover {
		background: black;
		color: white;
	}

	@media only screen and (max-width: 768px) {
		width: 6rem;
		text-align: center;
	}
`

const NextButton = styled(Button)`
	float: right;
	background: rgba(255, 127, 80, 0.2);
	color: coral;

	&:hover {
		background: #ff7f50;
		color: white;
	}
`

const PreviousButton = styled(Button)`
	background: rgba(255, 127, 80, 0.2);
	color: coral;
	visibility: ${(props) => props.visibility};

	&:hover {
		background: #ff7f50;
		color: white;
	}
`

const SubmitButton = styled(Button)`
	float: right;
`

const ButtonGroup = styled.div`
	padding: 1rem 2rem;

	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: space-between;
		padding: 1rem 1rem;
	}
`

const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 1rem;
	width: 60vw;

	@media only screen and (max-width: 768px) {
		width: 82.5vw;
	}
`

const getSteps = () => {
	return ['User Info', 'Covid-19', 'Event Info', 'Confirmation']
}

const RegisterForm = () => {
	const I18n = useI18n()

	const { userInfo, covid19Info, eventInfo } = useContext(StoreContext)

	const [activeStep, setActiveStep] = useState(0)
	const steps = getSteps()

	const userInfoForm = useForm<UserInfoData>({
		resolver: yupResolver(userInfoSchema),
	})
	const covid19Form = useForm<Covid19Data>({
		resolver: yupResolver(covid19Schema),
	})
	const eventInfoForm = useForm<EventInfoData>({
		resolver: yupResolver(eventInfoSchema),
	})

	const getStepContent = (stepIndex: number) => {
		switch (stepIndex) {
			case 0:
				return <UserInfo formProps={userInfoForm} data={userInfo[0]} />
			case 1:
				return <Covid19 formProps={covid19Form} data={covid19Info[0]} />
			case 2:
				return <EventInfo formProps={eventInfoForm} data={eventInfo[0]} />
			case 3:
				return <Confirmation data={{ userInfo, covid19Info, eventInfo }} />
			default:
				return 'Unknown Step Content'
		}
	}

	const handlePrevious = () => {
		setActiveStep((prevState: number) => prevState - 1)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const handleNext = () => {
		setActiveStep((prevState: number) => prevState + 1)
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	const onSubmit = (data: any) => {
		if (activeStep === 0) {
			userInfo[1](data)
		} else if (activeStep === 1) {
			covid19Info[1](data)
		} else if (activeStep === 2) {
			eventInfo[1](data)
		}
		handleNext()
	}

	const submitForm = () => {
		// eslint-disable-next-line no-console
		const interests: string[] = []
		for (const data in eventInfo[0]) {
			if (eventInfo[0][data] === true) {
				topics.forEach((topic: string) => {
					if (slugify(topic, { remove: /[()./]/g, lower: true }) === data) {
						interests.push(topic)
					}
				})
			}
		}
		console.log({
			userInfo: userInfo[0],
			covid19Info: covid19Info[0],
			eventInfo: {
				interestsTopic: interests,
				shirt: eventInfo[0].shirt,
				shirtSize: eventInfo[0].shirtSize,
			},
		})
	}

	let submitState = null
	if (activeStep === 0) {
		submitState = userInfoForm.handleSubmit(onSubmit)
	} else if (activeStep === 1) {
		submitState = covid19Form.handleSubmit(onSubmit)
	} else if (activeStep === 2) {
		submitState = eventInfoForm.handleSubmit(onSubmit)
	}

	return (
		<ContentContainer>
			<Text as={'h1'} textAlign={'center'}>
				{I18n.t(FORM_TITLE)}
			</Text>
			<Card>
				<Stepper>
					<ProgressBar step={activeStep} />
					{steps.map((stepTitle) => {
						return <Step key={stepTitle}>{stepTitle}</Step>
					})}
				</Stepper>
				<Form>{getStepContent(activeStep)}</Form>
			</Card>
			<ButtonGroup>
				<PreviousButton
					onClick={handlePrevious}
					visibility={activeStep === 0 ? 'hidden' : 'visible'}
				>
					Back
				</PreviousButton>
				{activeStep !== steps.length - 1 && (
					<NextButton onClick={submitState} hidden={activeStep === steps.length - 1}>
						Next
					</NextButton>
				)}
				{activeStep === steps.length - 1 && (
					<SubmitButton onClick={submitForm}>Submit</SubmitButton>
				)}
			</ButtonGroup>
		</ContentContainer>
	)
}

export default RegisterForm
