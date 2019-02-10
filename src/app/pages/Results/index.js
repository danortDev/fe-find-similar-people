import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import getCandidate from 'app/client/getCandidate';
import queryStringToObject from 'app/utils/queryStringToObject';
import LoadingOverlay from 'app/components/ui/LoadingOverlay';
import Strengths from 'app/components/ui/Strengths';
import Connections from 'app/components/ui/Connections';
import Button from 'app/components/ui/Button';
import {
  Container,
  Error,
  ErrorTitle,
  ErrorMessage,
  ProfileWrapper,
  Avatar,
  Name,
  Ocupation
} from './elements';


class Results extends Component {
  state = {
    candidate: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    const { history, location: { search } } = this.props;
    const { username } = queryStringToObject(search);
    if (!username) return history.push('/');
    this.getCandidate(username);
  }

  componentWillReceiveProps(nextProps) {
    const { history, location: { search } } = this.props;
    const { username } = queryStringToObject(search);

    const { location: { search: nextSearch } } = nextProps;
    const { username: nextUsername } = queryStringToObject(nextSearch);

    if (!nextUsername) return history.push('/');
    if (username !== nextUsername) return this.getCandidate(nextUsername);
  }

  getCandidate = async (username) => {
    try {
      this.setState(() => ({ loading: true }));
      const response = await getCandidate(username);
      this.setState(() => ({ loading: false, candidate: response.data }));
    } catch (error) {
      this.setState(() => ({ loading: false, error: true }));
    }
  }

  goBack = () => {
    const { history } = this.props;
    history.push('/');
  }

  renderSeachButton = () => (
    <Button onClick={this.goBack}>
      Go To Seach
    </Button>
  )

  render() {
    const { loading, candidate, error } = this.state;

    if (loading) return (
      <LoadingOverlay />
    );

    if (error) return (
      <Container>
        <Error>
          <ErrorTitle> Oops! </ErrorTitle>
          <ErrorMessage>
            Something wrong, we are sorry!
          </ErrorMessage>
          {this.renderSeachButton()}
        </Error>
      </Container>
    );

    const {
      name,
      ocupation,
      picture,
      strengths,
      topConnections
    } = candidate;

    return (
      <Container>
        <ProfileWrapper $background={picture}>
          {picture && (
            <Avatar src={picture} alt="User avatar" />
          )}
          <Name>
            {name}
          </Name>
          <Ocupation>
            {ocupation}
          </Ocupation>
          <Strengths strengths={strengths} />
          <Connections connections={topConnections} />
          {this.renderSeachButton()}
        </ProfileWrapper>
      </Container>
    );
  }
}

export default withRouter(Results);
