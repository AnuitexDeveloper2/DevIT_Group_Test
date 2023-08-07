import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { alertService } from '../services';
import { getToken } from './localStorage';

export interface HttpRequest<Req> {
    path: string;
    method?: string;
    body?: Req;
    accessToken?: boolean;
}

export const http = async <AxiosResponse, Req>(
    config: HttpRequest<Req>,
): Promise<AxiosResponse | undefined> => {
    const options: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
        data: config.body,
        method: config.method,
    };
    if (config.accessToken) {
        const token = getToken();
        options.headers!.Authorization = `Bearer ${token}`;
    }
    try {
        const result = await axios(`${process.env.REACT_APP_URL}${config.path}`, options);
        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status === 401) {
                localStorage.clear();
                window.location.href = '/';
                return;
            }
            if (typeof error.response?.data?.message === 'string') {
                alertService.error(error.response?.data?.message);
            } else if (Array.isArray(alertService.error(error.response?.data?.message))) {
                alertService.error(error.response?.data?.message[0]);
            }
        }
        return undefined;
    }
};
