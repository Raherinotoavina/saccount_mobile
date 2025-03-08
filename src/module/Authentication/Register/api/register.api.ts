import axiosInstance from '@/utils/axiosInstance';
import {registerUrl} from '../url/register.url';

export function register() {
    const response = axiosInstance.post(
        `${registerUrl.register}/${registerUrl.save}`,
    );

    return response;
}
