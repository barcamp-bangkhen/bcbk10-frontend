import React, {useState} from 'react'
import styled from 'styled-components';

import useI18n from 'core/i18n/hooks/useI18n'

import {FORM_TITLE} from './locales'
import Text from 'common/components/Text'
import ContentContainer from 'common/components/ContentContainer';

const Button = styled.button`
    font: inherit;
    border-radius: 3px;
    padding: 0.5rem 1rem;
    width: 10rem;
    background: transparent;
    border: 2px solid black;
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
    background: pink;
    float: right;
    
    &:hover {
        background: hotpink;
    }
`;

const PreviousButton = styled(Button)`
    visibility: ${props => props.visibility};
`;

const SubmitButton = styled(Button)`
    float: right;
`;

const Form = styled.form`
    width: 60vw;
    border: 1px solid black;
    padding: 1rem 2rem;
    border-radius: 1rem;
    
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.8rem 1.5rem;
`;

const ButtonGroup = styled.div`
    padding: 1rem 2rem;
    
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: space-between;
        padding: 1rem 1rem;
    }
`;

const Stepper = styled.div`
    display: flex;
    height: 3rem;
    border: 1px solid black;
    margin-top: 2rem;
    justify-content: space-around;
    align-items: center;
    border-radius: 1rem 1rem;
    
    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
        height: 2rem;
    }
`;

const Step = styled.div`
`;

const TextInput = styled.input.attrs({
    type: 'text'
})`
    flex: 1;
    margin-top: 0.5rem;
    padding: 0 0.75rem;
    height: 2rem;
    font: inherit;
    font-size: 1rem;
    border: 1px solid black;
    border-radius: 3px;
    outline: none;
`;

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const getSteps = () => {
    return ['User Info', 'Covid-19', 'Event Info', 'Confirmation']
};

const RegisterForm = () => {
    const I18n = useI18n()

    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <UserInfo/>;
            case 1:
                return <Covid19/>;
            case 2:
                return <EventInfo/>;
            case 3:
                return <Confirmation/>;
        }
    };

    return (
        <ContentContainer>
            <Text as={"h1"} textAlign={"center"}>{I18n.t(FORM_TITLE)}</Text>
            <Stepper>
                {steps.map((stepTitle) => {
                    return <Step>{stepTitle}</Step>
                })}
            </Stepper>
            <Form>
                {getStepContent(activeStep)}
            </Form>
            <ButtonGroup>
                <PreviousButton
                    type={'button'} onClick={() => setActiveStep(activeStep - 1)}
                    visibility={activeStep === 0 ? 'hidden' : 'visible'}
                >Back</PreviousButton>
                {activeStep !== steps.length - 1 &&
                <NextButton
                    type={'button'} onClick={() => setActiveStep(activeStep + 1)}
                    hidden={activeStep === steps.length - 1}
                >Next</NextButton>
                }
                {activeStep === steps.length - 1 &&
                <SubmitButton
                    type={'button'}
                >Register</SubmitButton>
                }
            </ButtonGroup>
        </ContentContainer>
    )
}

const UserInfo = () => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>First Name</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Last Name</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Nickname</label>
                    <TextInput/>
                </FormControl>
            </Col>
            <Col>
                <FormControl>
                    <label>Congenital Disease</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Allergic food</label>
                    <TextInput/>
                </FormControl>
            </Col>
        </Row>
    )
}

const Covid19 = () => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
            </Col>
            <Col>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
            </Col>
        </Row>
    )
}

const EventInfo = () => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
            </Col>
        </Row>
    )
}

const Confirmation = () => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>Test</label>
                    <TextInput/>
                </FormControl>
            </Col>
        </Row>
    )
}

export default RegisterForm
