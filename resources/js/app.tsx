import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './features/landing-page';
import {
    AuthProvider,
    ProtectedRoute,
    LoginPage,
    RegisterPage,
} from './features/auth';
import {
    SuperAdminDashboard,
    ReceptionistDashboard,
    DoctorDashboard,
    NurseDashboard,
    PharmacistDashboard,
    CashierDashboard,
    LaboratoryDashboard,
    PatientDashboard,
} from './features/dashboard';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/* Public Landing & Authentication Routes */}
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />

                    {/* 1. Super Admin Protected Dashboard */}
                    <Route
                        path="/admin/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['super_admin']}>
                                <SuperAdminDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 2. Receptionist Protected Dashboard */}
                    <Route
                        path="/receptionist/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['receptionist', 'super_admin']}>
                                <ReceptionistDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 3. Doctor Protected Dashboard */}
                    <Route
                        path="/doctor/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['doctor']}>
                                <DoctorDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 4. Nurse Protected Dashboard */}
                    <Route
                        path="/nurse/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['nurse']}>
                                <NurseDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 5. Pharmacist Protected Dashboard */}
                    <Route
                        path="/pharmacy/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['pharmacist']}>
                                <PharmacistDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 6. Cashier Protected Dashboard */}
                    <Route
                        path="/cashier/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['cashier']}>
                                <CashierDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 7. Laboratory Staff Protected Dashboard */}
                    <Route
                        path="/laboratory/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['laboratory_staff']}>
                                <LaboratoryDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* 8. Patient Protected Dashboard */}
                    <Route
                        path="/patient/dashboard"
                        element={
                            <ProtectedRoute allowedRoles={['patient']}>
                                <PatientDashboard />
                            </ProtectedRoute>
                        }
                    />

                    {/* Fallback wildcard route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById('root');

if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}

export default App;
