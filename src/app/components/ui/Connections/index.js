import React from 'react';
import Connection from 'app/components/ui/Connection';
import { Container, Title, Items } from './elements';

const Connections = ({ connections }) => {
  if (!connections || ! connections.length) return null;

  return (
    <Container>
      <Title>
        Top Connections
      </Title>
      <Items>
        {connections.map((connection, index) => (
          <Connection key={index} {...connection} />
        ))}
      </Items>
    </Container>
  );
};

export default Connections;
