import axios from "axios";

export const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000',
    withCredentials:true,
    withXSRFToken:true
})