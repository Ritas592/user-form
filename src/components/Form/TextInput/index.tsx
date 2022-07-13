import React, { useMemo } from 'react';
import { Field } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';

interface ITextInput {
  className: string;
  name: string;
  placeholder?: string;
  isValid: boolean;
  error: string;
  type?: string;
  as?: string;
  validate?: (value:string) => boolean;

}

const TextInput = ({
  className, name, placeholder, isValid, error, validate, type, as,
}: ITextInput) : JSX.Element => {
  const isValidItem = useMemo(() => (!isValid
    ? (<span className="text-danger">{error}</span>)
    : null), [error, isValid]);
  return (
    <Container>
      <Row>
        <Col xs={12} className="mx-auto">
          <Field
            className={className}
            name={name}
            placeholder={placeholder}
            validate={validate}
            type={type}
            as={as}
          />
        </Col>
      </Row>
      {isValidItem}
    </Container>
  );
};
export default TextInput;
