import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

// Add a request interceptor to include the auth token if available

api.interceptors.request.use((config) => {
        const token = localStorage.getItem('auth_token'); 
        if (token) {
            config.headers.Authorization = token ? `Bearer ${token}` : '';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }

);

export default api;

