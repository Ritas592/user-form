import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

export default apiClient;
