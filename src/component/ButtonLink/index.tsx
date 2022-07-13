import React from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface IButtonLink {
  link: string;
  title: string;
  className?: string;
  variant?: string;
}

const ButtonLink = ({
  link, title, variant, className,
}: IButtonLink) : JSX.Element => (

  <Container>
    <Row>
      <Col>
        <Link to={link}>
          <Button className={className} color="primary" variant={variant}>
            <h6>{title}</h6>
          </Button>
        </Link>
      </Col>
    </Row>
  </Container>
);
export default ButtonLink;
