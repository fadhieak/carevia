import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../types/auth.types';

interface ProtectedRouteProps {
    allowedRoles?: Role[];
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    allowedRoles,
    children,
}) => {
    const { user, isAuthenticated, isLoading, getDashboardRoute } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-800 text-white flex items-center justify-center mb-4 shadow-lg animate-pulse">
                    <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                </div>
                <p className="text-sm font-bold text-slate-800">Carevia Healthcare System</p>
                <p className="text-xs text-slate-400 mt-1">Memverifikasi izin akses pengguna...</p>
            </div>
        );
    }

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        // Redirect unauthorized role attempt to user's authorized role dashboard
        return <Navigate to={getDashboardRoute()} replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
