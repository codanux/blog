import axios from 'axios';
import { getToken, setToken, removeToken } from '@/utils/auth';

import { Notify } from 'quasar'

let notification = true;
export function setNotification(notify) {
    notification = notify;
};

// Create axios instance
const service = axios.create({
  baseURL: process.env.MIX_BASE_API,
  timeout: 10000, // Request timeout
});

// Request intercepter
service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + getToken(); // Set JWT token
    }
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  response => {
    if (response.headers.authorization) {
      setToken(response.headers.authorization);
      response.data.token = response.headers.authorization;
    }

    if (response.data.notify && notification){
        Notify.create({
            ...response.data.notify
        })
    }
    return response.data;
  },
  error => {
    let message = error.message;
    if (error.response.data && error.response.data.errors) {
        message = '<ul>';
        for (let [key, value] of Object.entries(error.response.data.errors)) {
            message += `<li> ${key}: ${value}</li>`;
        }
        message += '</ul>';
    } else if (error.response.data && error.response.data.error) {
      message = error.response.data.error;
    }


      Notify.create({
          progress: true,
          type: 'warning',
          html: true,
          title: error.response.data.message,
          message,
      });

    /*
    window.Vue.$store.dispatch('errors/setErrors', error.response.data.errors);
     */
    return Promise.reject(error.response.data);
  },
);

export default service;
