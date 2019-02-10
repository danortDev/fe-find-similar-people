import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Autocomplete from 'app/components/ui/Autocomplete';
import Button from 'app/components/ui/Button';
import { Container, Title, Note } from './elements';
import objectToQueryString from 'app/utils/objectToQueryString';


class Search extends Component {
  state = {
    username: ''
  }

  handleChange = ({ value: username }) => {
    console.log('username', username);
    this.setState(() => ({ username }));
  }

  search = () => {
    const { history } = this.props;
    const { username } = this.state;
    history.push(`/results${objectToQueryString({ username })}`);
  };

  render() {
    const { username } = this.state;
    return (
      <Container>
        <Title>
          Search
        </Title>
        <Autocomplete
          value={username}
          handleChange={this.handleChange}
        />
        <Button onClick={this.search} disabled={!username}>
          SEARCH
        </Button>
        <Note>
          Find people on your candidate's network that are
          similar to him...
        </Note>
      </Container>
    );
  }
}

export default withRouter(Search);
