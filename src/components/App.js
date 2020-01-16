import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Pokelist from './Pokelist'

function App() {
  return (
    <Container>
      <Row>
        <Pokelist />
      </Row>
    </Container>
  );
}

export default App;
