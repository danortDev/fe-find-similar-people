import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from 'app/components/containers/App';
import Search from 'app/pages/Search';
import Results from 'app/pages/Results';

const routes = [
  {
    path: '/',
    component: Search
  },
  {
    path: '/results',
    component: Results
  }
];

const Routes = () => (
  <Router>
    <App>
      {routes.map((route, index) => (
        <Route key={index} exact {...route} />
      ))}
    </App>
  </Router>
);

export default Routes;
