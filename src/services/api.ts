import axios from 'axios';

const api = axios.create({
  baseURL: 'https://contacts-backend-bdwz.onrender.com',
  timeout: 5000,
});

export default api;
