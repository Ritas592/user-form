import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import Success from './pages/Success';
import Signup from './pages/Signup';

import './App.scss';

const App = (): JSX.Element => (
  <Container className="App">
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success" element={<Success />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Col>
    </Row>
  </Container>
);

export default App;
