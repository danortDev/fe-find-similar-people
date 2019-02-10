import React from 'react';
import { withRouter } from 'react-router-dom';
import objectToQueryString from 'app/utils/objectToQueryString';
import { Container, Name, Title } from './elements';

const Connection = ({ history, name, title, username }) => {
  const viewConnection = () => {
    history.push(`/results${objectToQueryString({ username })}`);
  };

  return (
    <Container onClick={viewConnection}>
      <Name>
        {name}
      </Name>
      <Title>
        {title}
      </Title>
    </Container>
  );
};

export default withRouter(Connection);
