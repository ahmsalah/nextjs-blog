import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

instance.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default instance;
