import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TemplateHome from './TemplateHome';

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
        <TemplateHome/>
        </Col>
      </Row>
    </Container>
  )
}