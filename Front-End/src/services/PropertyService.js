import api from './api';

export const getProperties = async () => {
    try {
        const response = await api.get('/properties');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }

};

export const createProperty = async (propertyData) => {
    try {
        const response = await api.post('/properties', propertyData);
         return response.data;
    } catch (error) {
        throw error.response.data;
    }

};