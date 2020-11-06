import React from "react";
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import FormControl from "common/components/FormControl";
import TextInput from "common/components/TextInput";
import ErrorMessage from "common/components/ErrorMessage";
import Label from "common/components/Label";
import Span from 'common/components/Span';
import FormField from 'common/components/FormField'

const UserInfo = ({formProps: { register, errors }}) => {
    return (
        <Row>
            <Col>
                <FormField>
                    <FormControl>
                        <TextInput name="firstName" ref={register} placeholder=" "/>
                        <Label error={errors.firstName}>
                            <Span error={errors.firstName}>First name</Span>
                        </Label>
                    </FormControl>
                    <ErrorMessage show={errors.firstName}>{errors.firstName?.message}</ErrorMessage>
                </FormField>
                <FormField>
                    <FormControl>
                        <TextInput name="lastName" ref={register} placeholder=" " error={errors.lastName}/>
                        <Label>
                            <Span>Last name</Span>
                        </Label>
                    </FormControl>
                    <ErrorMessage show={errors.lastName}>{errors.lastName?.message}</ErrorMessage>
                </FormField>

                <FormField>
                    <FormControl>
                        <TextInput name="nickname" ref={register} placeholder=" " error={errors.nickname}/>
                        <Label>
                            <Span>Nickname</Span>
                        </Label>
                    </FormControl>
                    <ErrorMessage show={errors.nickname}>{errors.nickname?.message}</ErrorMessage>
                </FormField>

                <FormField>
                    <FormControl>
                        <TextInput name="email" ref={register} placeholder=" " error={errors.email}/>
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
                        <TextInput name="phoneNumber" ref={register} placeholder=" " error={errors.phoneNumber}/>
                        <Label>
                            <Span>Phone number</Span>
                        </Label>
                    </FormControl>
                    <ErrorMessage show={errors.phoneNumber}>{errors.phoneNumber?.message}</ErrorMessage>
                </FormField>

                <FormField>
                    <FormControl>
                        <TextInput name="conDisease" ref={register} placeholder=" "/>
                        <Label>
                            <Span>Con</Span>
                        </Label>
                    </FormControl>
                </FormField>

                <FormField>
                    <FormControl>
                        <TextInput name="allergicFood" ref={register} placeholder=" "/>
                        <Label>
                            <Span>Allergic food</Span>
                        </Label>
                    </FormControl>
                </FormField>

            </Col>
        </Row>
    )
}

export default UserInfo;
