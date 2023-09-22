import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  },
  withCredentials: true
});

export default axiosInstance;
