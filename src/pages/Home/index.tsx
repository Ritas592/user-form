import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ButtonLink from '../../components/ButtonLink';

const Home = () : JSX.Element => (
  <>
    <Container className="box my-5">
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center', marginLeft: '10px' }}>
            Welcome
          </h2>
        </Col>
      </Row>
      <Row>
        <ButtonLink
          link="/signup"
          title="Signup"
          className="my-3 w-50"
        />
      </Row>
      <Row>
        <ButtonLink
          link="/search"
          title="Search"
          className="my-3 w-50"
        />
      </Row>
    </Container>
  </>
);

export default Home;
