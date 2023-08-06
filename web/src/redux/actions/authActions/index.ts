import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../../helper/request';
import { SignInRequest, SignInResponse } from './types';

const baseUrl = `/auth`;

export const signInAction = createAsyncThunk<SignInResponse | undefined, SignInRequest>(
    'auth/signin',
    async (data: SignInRequest) => {
        const result = await http<SignInResponse, SignInRequest>({
            path: `${baseUrl}/signin `,
            method: 'post',
            body: data,
        });
        return result;
    },
);
