export const API_V1 = '/api/v1';

export const API_AUTH = `/auth`;

export const V1 = {
    AUTH: {
        LOGIN: `${API_V1}${API_AUTH}/login`,
        REGISTER: `${API_V1}${API_AUTH}/register`,
        LOGOUT: `${API_V1}/auth/logout`
    }
};
