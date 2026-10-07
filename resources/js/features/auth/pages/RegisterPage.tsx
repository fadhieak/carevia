import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { RegisterForm } from '../components/RegisterForm';
import { useAuth } from '../hooks/useAuth';
import { RegisterData } from '../types/auth.types';

export const RegisterPage: React.FC = () => {
    const { register, isAuthenticated, isLoading, error, clearError, getDashboardRoute } = useAuth();
    const navigate = useNavigate();

    // If already authenticated, redirect to patient dashboard
    useEffect(() => {
        if (isAuthenticated && !isLoading) {
            navigate(getDashboardRoute(), { replace: true });
        }
    }, [isAuthenticated, isLoading, getDashboardRoute, navigate]);

    const handleRegister = async (data: RegisterData) => {
        try {
            const user = await register(data);
            navigate(user.dashboard_route || '/patient/dashboard', { replace: true });
        } catch {
            // Error managed by useAuth
        }
    };

    return (
        <AuthLayout
            title="Daftar Akun Pasien Baru"
            subtitle="Buat akun untuk booking poliklinik, memantau resep obat, dan mengakses rekam medis digital Anda."
            badgeText="Portal Layanan Pasien Rumah Sakit"
        >
            <RegisterForm
                onSubmit={handleRegister}
                isLoading={isLoading}
                error={error}
                onClearError={clearError}
            />
        </AuthLayout>
    );
};

export default RegisterPage;
