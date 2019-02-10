const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://api-find-similar-people.herokuapp.com'
  : 'http://localhost:3030';

const ENDPOINTS = {
  SEARCH: `${BASE_URL}/people`,
  CANDIDATE: `${BASE_URL}/candidate`
};

export default ENDPOINTS;
