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
        builder.addCase(signInAction.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(signInAction.rejected, (state) => {
            state.pending = false;
        });
        builder.addCase(signInAction.fulfilled, (state, action) => {
            state.user = action.payload;
            state.pending = false;
        });
    },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
