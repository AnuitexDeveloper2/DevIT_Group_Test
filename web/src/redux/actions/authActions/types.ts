import { User } from '../../../models/user/types';

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    user: User;
    token: string;
}
