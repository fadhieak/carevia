import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { LoginForm } from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { LoginCredentials } from '../types/auth.types';

export const LoginPage: React.FC = () => {
    const { login, isAuthenticated, isLoading, error, clearError, getDashboardRoute } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // If already authenticated, redirect to destination or role dashboard
    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            const redirectPath = (location.state as any)?.from?.pathname || getDashboardRoute();
            navigate(redirectPath, { replace: true });
        }
    }, [isAuthenticated, isLoading, getDashboardRoute, navigate, location.state]);

    const handleLogin = async (credentials: LoginCredentials) => {
        try {
            const user = await login(credentials);
            const destination = (location.state as any)?.from?.pathname || user.dashboard_route;
            navigate(destination, { replace: true });
        } catch {
            // Error is managed and exposed by useAuth
        }
    };

    return (
        <AuthLayout
            title="Masuk ke Akun Anda"
            subtitle="Silakan masukkan kredensial resmi rumah sakit Anda untuk mengakses dashboard pelayanan."
            badgeText="Sistem Otorisasi Multi-Role Carevia"
        >
            <LoginForm
                onSubmit={handleLogin}
                isLoading={isLoading}
                error={error}
                onClearError={clearError}
            />
        </AuthLayout>
    );
};

export default LoginPage;
