import  { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate, useLocation } from 'react-router-dom';


export const AuthProvider = ({ children }) => {
    const AuthContext = createContext(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('auth_token') || null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

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

    // Login function
    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('/login', credentials);
            setToken(response.data.token);
            setUser(response.data.user);

            // Redirect to previous location or dashboard
            const origin = location.state?.from?.pathname || getDefaultRoute(response.data.user.role);
            navigate(origin);
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please try again.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Register function
    const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.post('/register', userData);
            setToken(response.data.token);
            setUser(response.data.user);

            // Redirect based on role
            navigate(getDefaultRoute(response.data.user.role));
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
            console.error('Registration error:', err);
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await api.post('/logout');
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            setToken(null);
            setUser(null);
            navigate('/login');
        }
    };

    // Check if user has required role(s)
    const hasRole = (requiredRoles) => {
        if (!user) return false;
        if (Array.isArray(requiredRoles)) {
            return requiredRoles.includes(user.role);
        }
        return user.role === requiredRoles;
    };

    // Get default route based on user role
    const getDefaultRoute = (role) => {
        switch (role) {
            case 'admin':
                return '/admin/dashboard';
            case 'owner':
                return '/owner/properties';
            case 'assistant':
                return '/assistant/complaints';
            default:
                return '/';
        }
    };

    const value = {
        user,
        token,
        loading,
        error,
        login,
        register,
        logout,
        hasRole,
        isAuthenticated: !!token
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
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