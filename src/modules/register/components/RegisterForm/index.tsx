import React, {useState} from 'react'
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'

import useI18n from 'core/i18n/hooks/useI18n'

import {FORM_TITLE} from './locales'
import Text from 'common/components/Text'
import ContentContainer from 'common/components/ContentContainer';
import UserInfo from "../UserInfo";
import EventInfo from "../EventInfo";
import Covid19 from "../Covid19";
import Confirmation from "../Confirmation";
import {UserInfoData} from "../UserInfo/UserInfoData";
import userInfoSchema from "../UserInfo/userInfoSchema";
import covid19Schema from "../Covid19/covid19Schema";
import {EventInfoData} from "../EventInfo/EventInfoData";
import eventInfoSchema from "../EventInfo/eventInfoSchema";
import {Covid19Data} from "../Covid19/Covid19Data";
import Stepper from "common/components/Stepper";
import Step from 'common/components/Step';
import Form from "common/components/Form";
import ProgressBar from "common/components/ProgressBar";

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
`;

const NextButton = styled(Button)`
    float: right;
    background: rgba(255, 127 ,80, 0.2);
    color: coral;
    
    &:hover {
        background: #ff7f50;
        color: white;
    }
`;

const PreviousButton = styled(Button)`
    background: rgba(255, 127 ,80, 0.2);
    color: coral;
    visibility: ${props => props.visibility};
    
    &:hover {
        background: #ff7f50;
        color: white;
    }
`;

const SubmitButton = styled(Button)`
    float: right;
`;

const ButtonGroup = styled.div`
    padding: 1rem 2rem;
    
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem;
    }
`;

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
`;

const getSteps = () => {
    return ['User Info', 'Covid-19', 'Event Info', 'Confirmation']
};

const RegisterForm = () => {
    const I18n = useI18n()

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const userInfoForm = useForm<UserInfoData>({
        resolver: yupResolver(userInfoSchema)
    })
    const covid19Form = useForm<Covid19Data>({
        resolver: yupResolver(covid19Schema)
    })
    const eventInfoForm = useForm<EventInfoData>({
        resolver: yupResolver(eventInfoSchema)
    })

    const getStepContent = (stepIndex: number) => {
        switch (stepIndex) {
            case 0:
                return <UserInfo formProps={userInfoForm}/>;
            case 1:
                return <Covid19 formProps={covid19Form}/>;
            case 2:
                return <EventInfo formProps={eventInfoForm}/>;
            case 3:
                return <Confirmation/>;
            default:
                return 'Unknown Step Content';
        }
    };

    const handlePrevious = () => {
        setActiveStep(prevState => prevState - 1);
    }

    const handleNext = () => {
        setActiveStep(prevState => prevState + 1);
    };

    const onSubmit = (data: any) => {
        console.log(data)
        handleNext()
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
            <Text as={"h1"} textAlign={"center"}>{I18n.t(FORM_TITLE)}</Text>
            <Card>
                <Stepper>
                    <ProgressBar step={activeStep}/>
                    {steps.map((stepTitle) => {
                        return <Step key={stepTitle}>{stepTitle}</Step>
                    })}
                </Stepper>
                <Form>
                    {getStepContent(activeStep)}
                </Form>
            </Card>
            <ButtonGroup>
                <PreviousButton
                    onClick={handlePrevious}
                    visibility={activeStep === 0 ? 'hidden' : 'visible'}
                >Back</PreviousButton>
                {activeStep !== steps.length - 1 &&
                <NextButton
                    onClick={submitState}
                    hidden={activeStep === steps.length - 1}
                >Next</NextButton>
                }
                {activeStep === steps.length - 1 &&
                <SubmitButton
                >Register</SubmitButton>
                }
            </ButtonGroup>
        </ContentContainer>
    )
}

export default RegisterForm
