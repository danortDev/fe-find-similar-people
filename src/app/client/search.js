import axios from 'axios';
import objectToQueryString from 'app/utils/objectToQueryString';
import ENDPOINTS from './constants';


const search = async (name) => {
  if (!name) return null;
  const path = `${ENDPOINTS.SEARCH}/${objectToQueryString({ name })}`;
  return axios.get(path);
};

export default search;
