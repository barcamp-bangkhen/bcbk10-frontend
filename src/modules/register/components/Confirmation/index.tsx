import React from "react";
import Row from 'common/components/Row';
import Col from 'common/components/Col';
import FormControl from "common/components/FormControl";
import TextInput from "common/components/TextInput";

const Confirmation = (props) => {
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

export default Confirmation;
