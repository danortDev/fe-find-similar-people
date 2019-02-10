import React from 'react';
import Strength from 'app/components/ui/Strength';
import { Container, Title, Items } from './elements';

const Strengths = ({ strengths }) => {
  if (!strengths || ! strengths.length) return null;

  return (
    <Container>
      <Title>
        Strengths
      </Title>
      <Items>
        {strengths.map((strength, index) => (
          <Strength key={index} {...strength} />
        ))}
      </Items>
    </Container>
  );
};

export default Strengths;
