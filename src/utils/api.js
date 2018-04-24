import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

const login = async (username, pw) => await instance.post('login', { username, password: pw });

const api = {
  login
};

export default api;
