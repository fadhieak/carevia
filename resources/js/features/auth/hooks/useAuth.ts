import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { authService } from '../services/authService';
import {
    LoginCredentials,
    RegisterData,
    Role,
    User,
    ROLE_CONFIGS,
} from '../types/auth.types';

interface AuthContextType {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
    login: (credentials: LoginCredentials) => Promise<User>;
    register: (data: RegisterData) => Promise<User>;
    logout: () => Promise<void>;
    refreshUser: () => Promise<void>;
    hasRole: (roles: Role | Role[]) => boolean;
    getDashboardRoute: () => string;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() => authService.getToken());
    const [user, setUser] = useState<User | null>(() => authService.getCachedUser());
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Synchronize initial session on mount
    useEffect(() => {
        let isMounted = true;

        const initAuth = async () => {
            const storedToken = authService.getToken();
            if (storedToken) {
                try {
                    const freshUser = await authService.getMe();
                    if (isMounted) {
                        setUser(freshUser);
                        setToken(storedToken);
                    }
                } catch (err) {
                    // Token invalid or expired, purge session
                    if (isMounted) {
                        authService.removeToken();
                        authService.clearCachedUser();
                        setUser(null);
                        setToken(null);
                    }
                }
            } else {
                if (isMounted) {
                    setUser(null);
                    setToken(null);
                }
            }

            if (isMounted) {
                setIsLoading(false);
            }
        };

        initAuth();

        return () => {
            isMounted = false;
        };
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const login = useCallback(async (credentials: LoginCredentials): Promise<User> => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await authService.login(credentials);
            setToken(data.token);
            setUser(data.user);
            return data.user;
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Login gagal.';
            setError(message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const register = useCallback(async (data: RegisterData): Promise<User> => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await authService.register(data);
            setToken(res.token);
            setUser(res.user);
            return res.user;
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Registrasi gagal.';
            setError(message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }, []);

    const logout = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            await authService.logout();
        } finally {
            setToken(null);
            setUser(null);
            setError(null);
            setIsLoading(false);
        }
    }, []);

    const refreshUser = useCallback(async (): Promise<void> => {
        try {
            const freshUser = await authService.getMe();
            setUser(freshUser);
        } catch {
            await logout();
        }
    }, [logout]);

    const hasRole = useCallback((roles: Role | Role[]): boolean => {
        if (!user) return false;
        const roleList = Array.isArray(roles) ? roles : [roles];
        return roleList.includes(user.role);
    }, [user]);

    const getDashboardRoute = useCallback((): string => {
        if (!user) return '/login';
        return user.dashboard_route || ROLE_CONFIGS[user.role]?.dashboardRoute || '/login';
    }, [user]);

    const value = useMemo<AuthContextType>(() => ({
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        error,
        login,
        register,
        logout,
        refreshUser,
        hasRole,
        getDashboardRoute,
        clearError,
    }), [user, token, isLoading, error, login, register, logout, refreshUser, hasRole, getDashboardRoute, clearError]);

    return React.createElement(AuthContext.Provider, { value }, children);
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
