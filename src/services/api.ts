import Cookies from 'js-cookie';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE!;

const baseAPI = axios.create({ baseURL: baseUrl });

baseAPI.interceptors.request.use(async (config) => {
  const userToken = Cookies.get('authToken');

  // If userToken exists, set 'Authorization' and 'x-access-token' headers to the user token
  if (userToken) {
    config.headers['Authorization'] = `Bearer ${userToken}`;
    config.headers['x-access-token'] = userToken;
  }

  return config;
});

export default baseAPI;
