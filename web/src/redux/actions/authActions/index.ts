import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../../helper/request';
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from './types';

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

export const signUpAction = createAsyncThunk<SignUpResponse | undefined, SignUpRequest>(
    'auth/signin',
    async (data: SignUpRequest) => {
        const result = await http<SignUpRequest, SignUpResponse>({
            path: `${baseUrl}/signup`,
            method: 'post',
            body: data,
        });
        return result;
    },
);
