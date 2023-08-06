import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../../helper/request';
import { SignInRequest } from './types';

const baseUrl = `/auth`;

export const signInAction = createAsyncThunk<any | undefined, SignInRequest>(
    'auth/signin',
    async (data: SignInRequest) => {
        const result = await http<any, SignInRequest>({
            path: `${baseUrl}/signin `,
            method: 'post',
            body: data,
        });
        return result;
    },
);
