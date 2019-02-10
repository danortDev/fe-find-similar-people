import axios from 'axios';
import ENDPOINTS from './constants';


const search = async (username) => {
  if (!username) return null;
  const path = `${ENDPOINTS.CANDIDATE}/${username}`;
  try {
    const result = axios.get(path);
    return result;
  } catch (error) {
    return error;
  }
};

export default search;
