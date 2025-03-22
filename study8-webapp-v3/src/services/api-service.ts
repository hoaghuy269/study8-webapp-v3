import axios from 'axios';
import {t} from "i18next";

const apiClient = axios.create({
    baseURL: 'http://localhost:8089/api/v1', // Base URL của API
    headers: {
        'Content-Type': 'application/json',
    },
});

export const setLocale = (locale: string) => {
    if (locale === null) {
        locale = 'en';
    }
    apiClient.defaults.headers.common['Accept-Language'] = locale;
};

const handleRequest = async (request: Promise<any>) => {
    try {
        const response = await request;
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.message || t('error.serverError');
    }
};

const apiService = {
    get: (url: string, params?: any) => handleRequest(apiClient.get(url, { params })),
    post: (url: string, data?: any) => handleRequest(apiClient.post(url, data)),
    put: (url: string, data?: any) => handleRequest(apiClient.put(url, data)),
    delete: (url: string) => handleRequest(apiClient.delete(url)),
};

export default apiService;

