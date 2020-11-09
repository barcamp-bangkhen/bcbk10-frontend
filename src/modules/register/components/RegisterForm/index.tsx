import React, { useState, useContext } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import slugify from 'slugify'
import styled from 'styled-components'

import useI18n from 'core/i18n/hooks/useI18n'

import {
	ButtonGroup,
	PreviousButton,
	NextButton,
	SubmitButton,
} from 'common/components/ButtonGroup'
import ContentContainer from 'common/components/ContentContainer'
import Form from 'common/components/Form'
import ProgressBar from 'common/components/ProgressBar'
import Step from 'common/components/Step'
import Stepper from 'common/components/Stepper'
import Text from 'common/components/Text'

import { StoreContext } from '../../context/store'
import Confirmation from '../Confirmation'
import ConfirmModal from '../ConfirmModal'
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

import { FORM_TITLE, USER_INFO, EVENT_INFO, CONFIRMATION, NEXT, BACK, SUBMIT } from './locales'

const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 1rem;
	width: 60vw;

	@media only screen and (max-width: 768px) {
		width: 82.5vw;
	}
`

const RegisterForm = () => {
	const I18n = useI18n()

	const { userInfo, covid19Info, eventInfo } = useContext(StoreContext)

	const [isOpen, setIsOpen] = useState(false)

	const [activeStep, setActiveStep] = useState(0)

	const userInfoForm = useForm<UserInfoData>({
		resolver: yupResolver(userInfoSchema),
	})
	const covid19Form = useForm<Covid19Data>({
		resolver: yupResolver(covid19Schema),
	})
	const eventInfoForm = useForm<EventInfoData>({
		resolver: yupResolver(eventInfoSchema),
	})

	const getSteps = () => {
		return [I18n.t(USER_INFO), 'Covid-19', I18n.t(EVENT_INFO), I18n.t(CONFIRMATION)]
	}

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
		axios
			.post('http://localhost:1337/paticipants', {
				userInfo: userInfo[0],
				covid19Info: covid19Info[0],
				eventInfo: {
					interestsTopic: interests,
					shirt: eventInfo[0].shirt,
					shirtSize: eventInfo[0].shirtSize,
				},
			})
			.then((response) => {
				console.log(response)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	const steps = getSteps()

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
					{I18n.t(BACK)}
				</PreviousButton>
				{activeStep !== steps.length - 1 && (
					<NextButton onClick={submitState} hidden={activeStep === steps.length - 1}>
						{I18n.t(NEXT)}
					</NextButton>
				)}
				{activeStep === steps.length - 1 && (
					<SubmitButton
						onClick={() => {
							setIsOpen(true)
						}}
					>
						{I18n.t(SUBMIT)}
					</SubmitButton>
				)}
			</ButtonGroup>
			<ConfirmModal open={isOpen} onClose={() => setIsOpen(false)} onSubmit={submitForm} />
		</ContentContainer>
	)
}

export default RegisterForm
