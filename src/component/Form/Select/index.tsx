import React, { useMemo } from 'react';
import { Field } from 'formik';
import { Col, Container, Row } from 'react-bootstrap';

interface ISelect {
  className: string;
  name: string;
  placeholder?: string;
  isValid: boolean;
  error: string;
  type?: string;
  as?: string;
  validate?: (value:string) => boolean;
  children?: JSX.Element | JSX.Element[];
}

const Select = ({
  className, name, placeholder, isValid, error, children, validate, type, as,
}: ISelect) : JSX.Element => {
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
          >
            {children}
          </Field>
        </Col>
      </Row>
      {isValidItem}
    </Container>

  );
};
export default Select;
