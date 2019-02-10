import React from 'react';
import logo from './assets/logo';
import icon from './assets/icon';
import { Container, Title, LogoContainer, Logo, Icon } from './elements';


const Navbar = () => (
  <Container>
    <LogoContainer>
      <Icon src={icon} alt="Find similars" />
      <Logo src={logo} alt="Torre"/>
    </LogoContainer>
    <Title>
      Find similar profiles
    </Title>
  </Container>
);

export default Navbar;
