import { V1 } from '../../../constants/api-constant';
import apiService from '../../../services/api-service';

export const registerCreate = async (email: string) => {
  const response = await apiService.post(V1.AUTH.REGISTER, {
    email,
    step: 'CREATE',
  });
  return response.data;
};

export const registerOTP = async (id: number) => {
  const response = await apiService.post(V1.AUTH.REGISTER, {
    id,
    step: 'OTP',
  });
  return response.data;
};

export const registerVerify = async (id: number, otp: string) => {
  const response = await apiService.post(V1.AUTH.REGISTER, {
    id,
    otp,
    step: 'VERIFY',
  });
  return response.data;
};

export const registerSubmit = async (id: number, name: string, role: string, password: string) => {
  const response = await apiService.post(V1.AUTH.REGISTER, {
    id,
    name,
    role,
    password,
    step: 'SUBMIT',
  });
  return response.data;
};
