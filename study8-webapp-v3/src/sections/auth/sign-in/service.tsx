import {V1} from "../../../constants/api-constant";
import apiService from "../../../services/api-service";


export const signIn = async (email: string, password: string) => {
    const response = await apiService.post(V1.AUTH.LOGIN, {
        username: email,
        password,
    });

    return response.data;
};
