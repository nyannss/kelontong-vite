import axios from 'axios';

// const host = process.env.REACT_APP_BACKEND_HOST;

const api = axios.create({
  baseURL: "http://localhost:8081",
});

export default api;
