import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from './assets/logo';
import icon from './assets/icon';
import { Container, Title, LogoContainer, Logo, Icon } from './elements';


const Navbar = ({ history }) => (
  <Container>
    <LogoContainer onClick={() => history.push('/')}>
      <Icon src={icon} alt="Find similars" />
      <Logo src={logo} alt="Torre"/>
    </LogoContainer>
    <Title>
      Find similar profiles
    </Title>
  </Container>
);

export default withRouter(Navbar);
