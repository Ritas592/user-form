import React, { useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface IFormGroup {
  isValid: boolean;
  error: string;
  children?: JSX.Element | JSX.Element[];
}

const FormGroup = ({
  isValid, error, children,
}: IFormGroup) : JSX.Element => {
  const isValidItem = useMemo(() => (!isValid
    ? (<span className="text-danger">{error}</span>)
    : null), [error, isValid]);

  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
      {isValidItem}

    </>
  );
};
export default FormGroup;
