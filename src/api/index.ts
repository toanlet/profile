import axios from 'axios';
import { LOCAL_STORE } from '../util/constant';
import _ from 'lodash';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '',
});

instance.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem(LOCAL_STORE.ACCESS_TOKEN);
    if (access_token) {
      _.set(config, ['header', 'Authorization'], `Bearer ${access_token}`);
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
  }
);
