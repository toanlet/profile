import axios from 'axios';
import { LOCAL_STORE } from '../util/constant';
import _, { isEmpty } from 'lodash';
import { getStorage, removeStorage, setStorage } from 'src/util/common';

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

    const originalRequest = error.config;
    const access_token_old = getStorage(LOCAL_STORE.ACCESS_TOKEN);
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      !isEmpty(access_token_old)
    ) {
      originalRequest._retry = true;
      //  const refresh_token = getStorage(LOCAL_STORE.REFRESH_TOKEN);
      //  removeStorage(LOCAL_STORE.ACCESS_TOKEN);
      //  const { data } = await refreshToken({
      //    refreshToken: refresh_token,
      //    accessToken: access_token_old,
      //  });
      //  if (data) {
      //    setStorage(LOCAL_STORE.ACCESS_TOKEN, data.accessToken);
      //    setStorage(LOCAL_STORE.REFRESH_TOKEN, data.refreshToken);
      //  return axiosClient(originalRequest);
      //  }
      //  store?.dispatch(logoutUser());
      //  store?.dispatch(getPermissions());
    }
    //  if (error.response.status === 423) {
    //    location.assign('/error');
    //  }

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
