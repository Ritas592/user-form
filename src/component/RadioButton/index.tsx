import React from 'react';
import { Field } from 'formik';
import { Container, Row, Col } from 'react-bootstrap';

interface IRadioButton {
  name: string;
  type: string;
  value: string;
  text: string
}

const RadioButton = ({
  name, type, value, text,
}: IRadioButton) : JSX.Element => (
  <Container>
    <Row>
      <Col xs={4} className="d-flex">
        <Field
          type={type}
          name={name}
          value={value}
        />
        <span className="px-3">{text}</span>
      </Col>
    </Row>
  </Container>
);
export default RadioButton;
