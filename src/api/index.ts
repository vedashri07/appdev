import axios from 'axios';
import { getUserToken } from '../utils/localStorageGetterSetter'; // TODO need some work after api is completed

const client = axios.create({
  baseURL: process.env.API_URL,
  timeout: 25000
});

const handleSuccess = (response: any) => {
  return response;
};

const handleError = (error: any) => {
  switch (error?.response?.status) {
    case 401:
      // unauthorized user
      // Router.push(
      // `/${
      // Router.asPath !== '/auth/login' && Router.asPath !== '/'
      // ? `?return=${Router.asPath}&login=true`
      // : '?login=true'
      // }`
      // );
      break;
    case 404:
      break;
    default:
      break;
  }
  return Promise.reject(error?.response?.data);
};

const handleAuth = (config: any) => {
  const token = getUserToken();
  if (token && token !== '' && token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

client.interceptors.response.use(handleSuccess, handleError);
client.interceptors.request.use(handleAuth);

export default function api(path: string, payload: any, method: any) {
  return new Promise((resolve, reject) => {
    client
      .request({
        method: method,
        url: path,
        responseType: 'json',
        data: payload
      })
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        if (
          typeof error !== 'undefined' &&
          error !== null &&
          typeof error.response !== 'undefined' &&
          typeof error.response.data !== 'undefined'
        ) {
          return reject(error.response.data);
        } else {
          return reject(error);
        }
      });
  });
}
