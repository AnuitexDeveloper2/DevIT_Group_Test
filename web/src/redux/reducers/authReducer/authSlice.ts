import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../models/user/types';
import { signInAction } from '../../actions/authActions';

export interface AuthReducerType {
    user: User | null;
    pending: boolean;
    token: string;
}

const initialState: AuthReducerType = {
    user: null,
    pending: false,
    token: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signInAction.fulfilled, (state, action) => {
            state.user = action.payload;
        });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
