import React, { useMemo, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { searchUserById } from '../../api';
import { UsersSearch } from '../../types';
import ButtonLink from '../../components/ButtonLink';

const validationSchema = Yup.object().shape({
  id: Yup.string().required('ID is required'),
});

const Search = () : JSX.Element => {
  const [users, setUsers] = useState<UsersSearch>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const userData = useMemo(() => users
    && (
    <>
      <Col xs={3} className="pt-4 list-group-item-primary">{users?.name}</Col>
      <Col xs={5} className="pt-4 list-group-item-success">{users?.email}</Col>
      <Col xs={2} className="pt-4 list-group-item-warning">{users?.gender}</Col>
      <Col xs={2} className="pt-4 list-group-item-danger">{users?.status}</Col>

    </>
    ), [users]);

  const alertError = useMemo(() => errorMessage
      && (<Alert variant="danger">{errorMessage}</Alert>), [errorMessage]);

  return (
    <>
      <Container className=" box my-5 p-4">
        <Formik
          initialValues={{
            id: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values): Promise<void> => searchUserById(values.id)
            .then((response: UsersSearch) => {
              setUsers(response);
              setErrorMessage(undefined);
            }).catch((error: any) => {
              setErrorMessage(error.message);
              setUsers(undefined);
            })}
        >
          {({ errors, touched, isValid }): JSX.Element => (
            <Form>
              <Row>
                <Col>
                  <h2 className="text-center">
                    Insert User ID to search
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Field
                    className="form-control w-100 mt-4"
                    name="id"
                    placeholder="Enter ID"
                  />
                  {errors.id && touched.id ? (
                    <span className="text-danger">{errors.id}</span>
                  ) : null}
                </Col>
              </Row>
              <Button
                className="mt-4"
                type="submit"
                disabled={!isValid}
              >
                Search
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
      <Row>
        {userData}
      </Row>
      <Row>
        <Col>
          {alertError}
        </Col>
      </Row>
      <Row>
        <ButtonLink
          link="/"
          title="Go to home"
          variant="link"
          className="pt-4"
        />
      </Row>
    </>
  );
};

export default Search;
