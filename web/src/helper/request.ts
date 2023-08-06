import axios, { AxiosError, AxiosResponse } from 'axios';
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
    const headerRequest = {
        'Content-Type': 'application/json',
    };
    if (config.accessToken) {
        headerRequest['Authorization'] = `Bearer ${config.accessToken}`;
    }
    try {
        const result = await axios(`${process.env.REACT_APP_URL}${config.path}`, {
            data: config.body,
            method: config.method,
        });
        return result.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            alertService.error(error.response?.data?.message[0]);
        }
        return undefined;
    }
};
