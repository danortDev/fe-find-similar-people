import React from 'react';
import { Container } from './elements';

const Button = ({ onClick, children, disabled }) => (
  <Container disabled={disabled} onClick={onClick}>
    {children}
  </Container>
);

export default Button;
