import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  Button, Col, Container, ListGroup, Row,
} from 'react-bootstrap';

import ButtonLink from '../../components/ButtonLink';
import { UsersSearch } from '../../types';
import { populateList } from '../../utils';

import './index.scss';

const Success = () : JSX.Element => {
  const [users, setUsers] = useState<UsersSearch[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showUsers, setShowusers] = useState<boolean>(false);

  const fetchList = useCallback(
    () => populateList(isLoading, setIsLoading, setUsers),
    [isLoading],
  );

  useEffect(() => {
    setIsLoading(true);
    if (!users) {
      fetchList();
    }
  }, [fetchList, users]);

  const lista = useMemo(
    () => showUsers && users?.map((item: UsersSearch, index: number) => (

      <Row className="border-0 border-bottom border-info" key={`users-item-${index}`}>
        <Col xs={2} className="pt-4 list-group-item-secondary"><span>{item.id}</span></Col>
        <Col xs={2} className="pt-4 list-group-item-primary"><span>{item.name}</span></Col>
        <Col xs={4} className="pt-4 list-group-item-success"><span>{item.email}</span></Col>
        <Col xs={2} className="pt-4 list-group-item-warning"><span>{item.gender}</span></Col>
        <Col xs={2} className="pt-4 list-group-item-danger"><span>{item.status}</span></Col>
      </Row>

    )),
    [showUsers, users],
  );

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2 className="text-center text-success">
            Registration successful!
          </h2>
        </Col>
      </Row>
      <ButtonLink
        link="/"
        title="Go to home"
        variant="link"
      />
      <Row>
        <Col>
          <Button onClick={(): void => setShowusers(!showUsers)} className="my-5" color="primary">
            <h6>User List</h6>
          </Button>
        </Col>
      </Row>
      <ListGroup>
        {lista}
      </ListGroup>
    </Container>

  );
};

export default Success;
