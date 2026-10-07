import axios, { AxiosError } from 'axios';
import {
    ApiResponse,
    AuthSuccessData,
    LoginCredentials,
    RegisterData,
    User,
} from '../types/auth.types';

const TOKEN_KEY = 'carevia_auth_token';
const USER_KEY = 'carevia_auth_user';

const apiClient = axios.create({
    baseURL: '/api/v1',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

// Interceptor to append Authorization header dynamically
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const authService = {
    getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token: string): void {
        localStorage.setItem(TOKEN_KEY, token);
    },

    removeToken(): void {
        localStorage.removeItem(TOKEN_KEY);
    },

    getCachedUser(): User | null {
        try {
            const raw = localStorage.getItem(USER_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    },

    setCachedUser(user: User): void {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    clearCachedUser(): void {
        localStorage.removeItem(USER_KEY);
    },

    async login(credentials: LoginCredentials): Promise<AuthSuccessData> {
        try {
            const response = await apiClient.post<ApiResponse<AuthSuccessData>>(
                '/auth/login',
                credentials
            );

            if (response.data.status === 'success' && response.data.data) {
                const { token, user } = response.data.data;
                this.setToken(token);
                this.setCachedUser(user);
                return response.data.data;
            }

            throw new Error(response.data.message || 'Login gagal.');
        } catch (error) {
            throw this.handleApiError(error);
        }
    },

    async register(data: RegisterData): Promise<AuthSuccessData> {
        try {
            const response = await apiClient.post<ApiResponse<AuthSuccessData>>(
                '/auth/register',
                data
            );

            if (response.data.status === 'success' && response.data.data) {
                const { token, user } = response.data.data;
                this.setToken(token);
                this.setCachedUser(user);
                return response.data.data;
            }

            throw new Error(response.data.message || 'Registrasi gagal.');
        } catch (error) {
            throw this.handleApiError(error);
        }
    },

    async getMe(): Promise<User> {
        try {
            const response = await apiClient.get<ApiResponse<{ user: User }>>(
                '/auth/me'
            );

            if (response.data.status === 'success' && response.data.data?.user) {
                const user = response.data.data.user;
                this.setCachedUser(user);
                return user;
            }

            throw new Error('Gagal mengambil data pengguna.');
        } catch (error) {
            throw this.handleApiError(error);
        }
    },

    async logout(): Promise<void> {
        try {
            await apiClient.post('/auth/logout');
        } catch (error) {
            // Log or ignore network error during logout
            console.warn('Logout API notification failed, clearing local session.', error);
        } finally {
            this.removeToken();
            this.clearCachedUser();
        }
    },

    handleApiError(error: unknown): Error {
        if (axios.isAxiosError(error)) {
            const axiosErr = error as AxiosError<ApiResponse>;
            const responseData = axiosErr.response?.data;

            if (responseData?.errors) {
                // Collect first validation message
                const firstKey = Object.keys(responseData.errors)[0];
                const firstMsg = responseData.errors[firstKey]?.[0];
                if (firstMsg) {
                    return new Error(firstMsg);
                }
            }

            if (responseData?.message) {
                return new Error(responseData.message);
            }

            if (axiosErr.response?.status === 401) {
                return new Error('Sesi Anda telah berakhir. Silakan login kembali.');
            }

            if (axiosErr.response?.status === 403) {
                return new Error('Akses ditolak. Anda tidak memiliki izin untuk tindakan ini.');
            }
        }

        if (error instanceof Error) {
            return error;
        }

        return new Error('Terjadi kesalahan pada server. Silakan coba beberapa saat lagi.');
    },
};
