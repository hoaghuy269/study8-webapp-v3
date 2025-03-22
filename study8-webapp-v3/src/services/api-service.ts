import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8089/api/v1', // Base URL của API
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setLocale = (locale: string) => {
    apiClient.defaults.headers.common['Accept-Language'] = locale;
};

const apiService = {
    get: (url: string, params?: any) => apiClient.get(url, { params }),
    post: (url: string, data?: any) => apiClient.post(url, data),
    put: (url: string, data?: any) => apiClient.put(url, data),
    delete: (url: string) => apiClient.delete(url),
};

export default apiService;
