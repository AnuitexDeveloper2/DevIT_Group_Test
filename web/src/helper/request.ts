import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAppSelector } from '../redux/store';
import { alertService } from '../services';

export interface HttpRequest<Req> {
    path: string;
    method?: string;
    body?: Req;
    accessToken?: string;
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
        options.headers!.Authorization = `Bearer ${config.accessToken}`;
    }
    try {
        const result = await axios(`${process.env.REACT_APP_URL}${config.path}`, options);
        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (typeof error.response?.data?.message === 'string') {
                alertService.error(error.response?.data?.message);
            } else if (Array.isArray(alertService.error(error.response?.data?.message))) {
                alertService.error(error.response?.data?.message[0]);
            }
        }
        return undefined;
    }
};
