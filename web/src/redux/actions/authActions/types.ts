import { Role } from '../../../models/user/enum';
import { User } from '../../../models/user/types';

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignInResponse {
    user: User;
    token: string;
}

export interface SignUpRequest {
    email: string;
    password: string;
    role?: Role;
}

export interface SignUpResponse {
    email: string;
    password: string;
    role?: Role;
}
