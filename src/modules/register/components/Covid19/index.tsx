import React from "react";
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import FormControl from "common/components/FormControl";
import RadioGroup from "common/components/RadioGroup";
import Radio from 'common/components/Radio'

const Covid19 = ({formProps: { register, errors }}) => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>1. Temperature greater or equal than 37.5 degrees or had a fever before.</label>
                    <RadioGroup>
                        <Radio name="q1"/>
                        <label>Lower than 37.5 C</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio name="q1"/>
                        <label>Over or same as 37.5 C or feeling feverish</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>2. Either illness with respiratory symptoms or following ”cough, sore throat, shortness on breathing or a difficulty on breathing”</label>
                    <RadioGroup>
                        <Radio/>
                        <label>None</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>3. Travelled to / from or living in the COVID-19 risky area during 14 days before started illness.</label>
                    <RadioGroup>
                        <Radio/>
                        <label>None</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>4. Contacted / Stay closed to COVID-19 patient (keep distance less than 1 meter fo 5 minutes) within 14 days.</label>
                    <RadioGroup>
                        <Radio/>
                        <label>None</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>5. Travelled to community area or crowded place such as local market, shopping mall, hospital or public transport.</label>
                    <RadioGroup>
                        <Radio/>
                        <label>None</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>6. Patient who contacted with foreigner, crowded place or community area.</label>
                    <RadioGroup>
                        <Radio/>
                        <label>No</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>7. Are you a medical staff?</label>
                    <RadioGroup>
                        <Radio/>
                        <label>No</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <label>8. Been in close contact with 5 or more people who have had flu at the same time in the last 14 days</label>
                    <RadioGroup>
                        <Radio/>
                        <label>No</label>
                    </RadioGroup>
                    <RadioGroup>
                        <Radio/>
                        <label>Yes</label>
                    </RadioGroup>
                </FormControl>
            </Col>
        </Row>
    )
}

export default Covid19;
