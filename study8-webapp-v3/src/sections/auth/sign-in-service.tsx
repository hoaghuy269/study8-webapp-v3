import apiService from "../../services/api-service";


export const signIn = async (email: string, password: string) => {
    const response = await apiService.post('/auth/login', {
        username: email,
        password,
    });

    return response.data;
};
