import React, { useCallback, useEffect, useState } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { UsersData, UsersSearch } from '../../types';
import { createUsers } from '../../api';
import TextInput from '../../components/Form/TextInput';
import Select from '../../components/Form/Select';
import FormGroup from '../../components/Form/FormGroup';
import RadioButton from '../../components/RadioButton';
import ButtonLink from '../../components/ButtonLink';
import { populateList } from '../../utils';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').min(2, 'Too Short!').matches(/^[a-z ,.'-]+$/i, 'Invalid name!'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.string().required('Gender is required'),
  status: Yup.string().required('Status is required'),
});

const Users = () : JSX.Element => {
  const [users, setUsers] = useState<UsersSearch[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

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

  const validationEmail = useCallback(
    (value: string): any => (users?.find((user) => user.email === value) && 'Email already exists'),
    [users],
  );

  return (
    <>
      <Container className="box p-4">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            gender: '',
            status: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values: UsersData): Promise<void> => {
            await createUsers(values);
            navigate('/success');
          }}
        >
          {({ errors, touched, isValid }): JSX.Element => (
            <Form>
              <TextInput
                className="form-control w-100 mt-4"
                name="name"
                placeholder="Enter Name"
                isValid={!(errors.name && touched.name)}
                error={errors.name || ''}
              />
              <TextInput
                className="form-control w-100 mt-4"
                name="email"
                placeholder="Enter Email"
                isValid={!(errors.email && touched.email)}
                error={errors.email || ''}
                validate={validationEmail}
              />
              <Select
                className="form-control w-100 mt-4"
                name="gender"
                as="select"
                isValid={!(errors.gender && touched.gender)}
                error={errors.gender || ''}
              >
                <option label="Select gender">
                  Select a gender
                </option>
                <option value="male" label="male">male</option>
                <option value="female">female</option>
              </Select>

              <FormGroup
                isValid={!(errors.status && touched.status)}
                error={errors.status || ''}
              >
                <Row>
                  <Col className="d-flex justify-content-start" xs={4}>
                    <b className="mr-auto">Status:</b>
                  </Col>
                  <RadioButton
                    type="radio"
                    name="status"
                    value="active"
                    text="active"
                  />
                  <RadioButton
                    type="radio"
                    name="status"
                    value="inactive"
                    text="inactive"
                  />
                </Row>
              </FormGroup>
              <Button type="submit" disabled={!isValid}>Create</Button>
            </Form>
          )}
        </Formik>
      </Container>
      <Row>
        <ButtonLink
          link="/"
          title="Go to home"
          variant="link"
          className="my-4"
        />
      </Row>

    </>
  );
};
export default Users;
