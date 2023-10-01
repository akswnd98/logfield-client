import { API_SERVER_URL } from '@/environment';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_SERVER_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  },
  withCredentials: true
});

export default axiosInstance;
