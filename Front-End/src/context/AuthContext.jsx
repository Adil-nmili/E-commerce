// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { authService } from '../services/AuthService';

// Create context OUTSIDE the provider
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth_token') || null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Initialize user from token on mount
    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (token) {
                    const response = await api.get('/user');
                    setUser(response.data);
                }
            } catch (err) {
                console.error('Session validation failed:', err);
                logout();
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    // Handle token storage and removal
    useEffect(() => {
        if (token) {
            localStorage.setItem('auth_token', token);
        } else {
            localStorage.removeItem('auth_token');
            setUser(null);
        }
    }, [token]);

    // Login function (REMOVED NAVIGATION)
    const loginUser = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.login(credentials);
            setToken(response.data.token);
            setUser(response.data.user);
            return response.data; // Return response data
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
            console.error('Login error:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Register function (REMOVED NAVIGATION)
    const registerUser  = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const payload = {
                name: userData.fullName,
                email: userData.email,
                password: userData.password,
                role: 'client'
            };
            
            const response = await authService.register(userData)
            // const response = await api.post('/register', payload);
            setToken(response.data.token);
            setUser(response.data.user);
            return response.data;
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
            console.error('Registration error:', err);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    // Logout function (REMOVED NAVIGATION)
    const logout = async () => {
        try {
            await api.post('/logout');
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            setToken(null);
            setUser(null);
        }
    };

    const hasRole = (requiredRoles) => {
        if (!user) return false;
        if (Array.isArray(requiredRoles)) {
            return requiredRoles.includes(user.role);
        }
        return user.role === requiredRoles;
    };

    const value = {
        user,
        token,
        loading,
        error,
        loginUser,
        registerUser,
        logout,
        hasRole,
        isAuthenticated: !!token
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};