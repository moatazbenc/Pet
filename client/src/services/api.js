import axios from 'axios';
const api = axios.create({
baseURL: 'http://localhost:5000/api', // Base URL for the backend API
});
// Add a request interceptor to add the JWT token to the header if it exists
api.interceptors.request.use((config) => {
const token = localStorage.getItem('token');
if (token) {
config.headers.Authorization = `Bearer ${token}`;
}
return config;
}, (error) => {
return Promise.reject(error);
});
export default api;