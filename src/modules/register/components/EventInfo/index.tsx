import React from "react";
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import FormControl from "common/components/FormControl";
import ErrorMessage from "common/components/ErrorMessage";
import RadioGroup from "common/components/RadioGroup";
import Radio from 'common/components/Radio'
import FormField from "common/components/FormField";

const EventInfo = ({formProps: {register, errors, watch}}) => {
    return (
        <Row>
            <Col>
                <FormControl>
                    <label>Interested Topic</label>
                    <select name="interestedTopic" ref={register}>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                    {errors.interestedTopic && <ErrorMessage>{errors.interestedTopic?.message}</ErrorMessage>}
                </FormControl>
                <Row>
                    <Col>
                        <FormField>
                            <FormControl>
                                <label>Prefer shirt?</label>
                                <RadioGroup>
                                    <Radio name="shirt" value="yes" ref={register}/>
                                    <label>Yes</label>
                                </RadioGroup>
                                <RadioGroup>
                                    <Radio name="shirt" value="no" ref={register}/>
                                    <label>No</label>
                                </RadioGroup>
                            </FormControl>
                            <ErrorMessage show={errors.shirt}>{errors.shirt?.message}</ErrorMessage>
                        </FormField>
                    </Col>
                    {watch("shirt") === 'yes' &&
                    <Col>
                        <FormField>
                            <FormControl>
                                <label>Size</label>
                                <select name="shirtSize" ref={register}>
                                    <option>-</option>
                                    <option>S</option>
                                    <option>M</option>
                                    <option>L</option>
                                    <option>XL</option>
                                    <option>XXL</option>
                                </select>
                            </FormControl>
                            <ErrorMessage show={errors.shirtSize}>{errors.shirtSize?.message}</ErrorMessage>
                        </FormField>
                    </Col>
                    }
                </Row>
            </Col>
        </Row>
    )
}

export default EventInfo;
