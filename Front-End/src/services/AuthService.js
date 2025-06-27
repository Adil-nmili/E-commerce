import api from './api';
export const authService = {
    login: async (credentials) => {
        try {
            const response = await api.post('/login', credentials);
            localStorage.setItem('auth_token', response.data.token);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }

    },
    register: async (userData) => {
        try {
            const response = await api.post('/register', userData);
            return response.data;

        } catch (error) {
            throw error.response.data;
        }

    }
}  
