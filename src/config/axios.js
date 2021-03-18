import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

API.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default API;
