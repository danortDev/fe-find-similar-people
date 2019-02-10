import React from 'react';
import { Container, Name, Recommendations } from './elements';

const Strength = ({ name, recommendations }) => (
  <Container>
    <Name>
      {name}
    </Name>
    <Recommendations>
      {recommendations}
    </Recommendations>
  </Container>
);

export default Strength;
