import axiosClient from './axiosClient';
import { BASE_URL } from '../constants/apiRoot';
class AuthAPI {
    HandleAuthentication = async (
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put' | 'delete',
    ) => {
        return await axiosClient(`${BASE_URL}/auth${url}`, {
            method: method ?? 'get',
            data,
        });
    };
};

const authenticationAPI = new AuthAPI();

export default authenticationAPI;