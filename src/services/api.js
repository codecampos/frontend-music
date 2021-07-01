import axios from 'axios';

const api = axios.create({
  baseURL: 'http://1e357f43197a.ngrok.io',
});

export default api;
