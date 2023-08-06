import axios, { AxiosResponse } from 'axios';

export interface HttpRequest<Req> {
    path: string;
    method?: string;
    body?: Req;
    accessToken?: string;
}

export const http = async <AxiosResponse, Req>(
    config: HttpRequest<Req>,
): Promise<AxiosResponse> => {
    const headerRequest = {
        'Content-Type': 'application/json',
    };
    if (config.accessToken) {
        headerRequest['Authorization'] = `Bearer ${config.accessToken}`;
    }
    return await axios(config.path, {
        data: config.body,
        method: config.method,
    });
};
