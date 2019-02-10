const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'http://localhost:3030'
  : 'http://localhost:3030';

const ENDPOINTS = {
  SEARCH: `${BASE_URL}/people`,
  CANDIDATE: `${BASE_URL}/candidate`
};

export default ENDPOINTS;
